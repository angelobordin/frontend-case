import axios, { AxiosInstance } from "axios";
import { API, ROUTE_TRANSACTIONS } from "../../../Utils/routes/routes";

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
  private axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      baseURL: API,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async list(): Promise<TransactionListResponse> {
    const token = localStorage.getItem("token");
    const { data } = await this.axios.get(ROUTE_TRANSACTIONS, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  }
}
