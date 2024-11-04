export interface IButtonProps {
  handleFilter: (mode: string) => void;
  filter: string;
}

export interface ITransactionListResponse {
  results: IDateTransactions[];
  itemsTotal: number;
}

export interface IDateTransactions {
  items: ITransaction[];
  date: string;
}

export interface ITransaction {
  id: string;
  description: string;
  label: string;
  entry: "DEBIT" | "CREDIT";
  amount: number;
  name: string;
  dateEvent: string;
  status: "COMPLETED";
}
