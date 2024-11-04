import { ROUTE_TRANSACTIONS } from "../../../Utils/routes/routes";
import AxiosClient from "../../../Utils/axios/axios-client";
import { ITransactionListResponse } from "./interfaces";

export default class TransactionService {
  private axiosInstance = AxiosClient.getInstance();

  async list(): Promise<ITransactionListResponse> {
    const { data } = await this.axiosInstance.get(ROUTE_TRANSACTIONS);

    return data;
  }
}
