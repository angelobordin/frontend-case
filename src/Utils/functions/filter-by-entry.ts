import { ITransactionListResponse } from "../../components/IBanking/Transactions/utils/interfaces";

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
