import { ITransactionListResponse } from "../../Pages/IBanking/Transactions/utils/interfaces";

export function filterByEntry(
  dataOrigin: ITransactionListResponse,
  entry: string
) {
  return (
    dataOrigin?.results
      ?.map((result) => result.items)
      .flat()
      .filter((item) => item.entry === entry) || []
  );
}
