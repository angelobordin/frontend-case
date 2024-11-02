import { ROUTE_TRANSACTIONS } from "../../../Utils/routes/routes";
import AxiosClient from "../../../Utils/axios/axios-client";

export interface TransactionListResponse {
  results: IDateTransactions[];
  itemsTotal: number;
}

export interface IDateTransactions {
  items: {
    id: string;
    description: string;
    label: string;
    entry: "DEBIT" | "CREDIT";
    amount: number;
    name: string;
    dateEvent: string;
    status: "COMPLETED";
  }[];
  date: string;
}

export default class TransactionService {
  private axiosInstance = AxiosClient.getInstance();

  async list(): Promise<TransactionListResponse> {
    const { data } = await this.axiosInstance.get(ROUTE_TRANSACTIONS);

    return data;
  }
}
