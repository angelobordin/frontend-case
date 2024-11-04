import { useEffect, useState } from "react";
import {
  formatAmount,
  formatDateWithMonthName,
} from "../../../../Utils/functions/formaters";
import {
  ITransaction,
  ITransactionListResponse,
  IDateTransactions,
} from "../interfaces";
import Transaction from "../Transaction";
import { filterByEntry } from "../../../../Utils/functions/filter-by-entry";
import TransactionService from "../service";
import { ENTRY } from "../../../../Utils/types/entry";

const transactionService = new TransactionService();

function TransactionList({ filter }: { filter: string }) {
  const [loading, setLoading] = useState(true);
  const [debitList, setDebitList] = useState<ITransaction[]>([]);
  const [creditList, setCreditList] = useState<ITransaction[]>([]);
  const [transactionList, setTransactionList] = useState<ITransaction[]>([]);

  const calculateBalance = (items: ITransaction[]) =>
    items.reduce((total, item) => {
      return item.entry === ENTRY.CREDIT
        ? total + item.amount
        : total - item.amount;
    }, 0);

  const groupTransactionsByDate = (
    transactions: ITransaction[]
  ): IDateTransactions[] => {
    return transactions
      .sort(
        (a, b) =>
          new Date(a.dateEvent).getTime() - new Date(b.dateEvent).getTime()
      )
      .reduce((days: IDateTransactions[], transaction) => {
        const date = new Date(transaction.dateEvent).toDateString();
        const lastGroup = days[days.length - 1];

        if (lastGroup && lastGroup.date === date) {
          lastGroup.items.push(transaction);
        } else {
          days.push({ date, items: [transaction] });
        }

        return days;
      }, []);
  };
  const groupedTransactions = groupTransactionsByDate(transactionList);

  useEffect(() => {
    switch (filter) {
      case ENTRY.CREDIT:
        setTransactionList(creditList);
        break;
      case ENTRY.DEBIT:
        setTransactionList(debitList);
        break;
      default:
        setTransactionList([...debitList, ...creditList]);
        break;
    }
  }, [filter, creditList, debitList]);

  const getTransactionList = async () => {
    const res: ITransactionListResponse = await transactionService.list();
    setDebitList(filterByEntry(res, "DEBIT"));
    setCreditList(filterByEntry(res, "CREDIT"));
    setLoading(false);
  };

  useEffect(() => {
    getTransactionList();
  }, []);

  const renderDayTransactionDetails = (day: IDateTransactions) => (
    <div className="transaction-date">
      <h6>{formatDateWithMonthName(day.date)}</h6>
      <span className="text-gray">
        Saldo do dia{" "}
        <strong>{formatAmount(calculateBalance(day.items))}</strong>
      </span>
    </div>
  );

  const renderDayTransaction = (day: IDateTransactions, index: number) => (
    <div key={index}>
      {renderDayTransactionDetails(day)}
      <div className="border border-opacity-50 rounded-4 mb-3 py-3 grid row-gap-5">
        {day.items.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </div>
    </div>
  );

  if (loading || transactionList.length === 0) {
    return <p>Carregando transações...</p>;
  }

  return (
    <div className="tab-content" id="transactionTabsContent">
      {groupedTransactions.map(renderDayTransaction)}
    </div>
  );
}

export default TransactionList;
