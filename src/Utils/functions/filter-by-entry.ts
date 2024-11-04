import { ITransactionListResponse } from "../../components/IBanking/Transactions/interfaces";

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
