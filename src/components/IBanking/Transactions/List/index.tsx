import { useEffect, useState } from "react";
import {
  formatAmount,
  formatDateWithMonthName,
} from "../../../../Utils/functions/formaters";
import { ITransaction, ITransactionListResponse } from "../interfaces";
import Transaction from "../Transaction";
import { filterByEntry } from "../../../../Utils/functions/filter-by-entry";
import TransactionService from "../service";
import { ENTRY } from "../../../../Utils/types/entry";

const transactionService = new TransactionService();

interface DayTransactions {
  date: string;
  items: ITransaction[];
}

function TransactionList({ filter }: { filter: string }) {
  const [loading, setLoading] = useState(true);
  const [debitList, setDebitList] = useState<ITransaction[]>([]);
  const [creditList, setCreditList] = useState<ITransaction[]>([]);
  const [transactionList, setTransactionList] = useState<ITransaction[]>([]);

  const groupedTransactions: DayTransactions[] = transactionList
    .sort(
      (a, b) =>
        new Date(a.dateEvent).getTime() - new Date(b.dateEvent).getTime()
    )
    .reduce((days: DayTransactions[], transaction) => {
      console.log("antes days: ", days);
      const date = new Date(transaction.dateEvent).toDateString();
      const lastGroup = days[days.length - 1];

      if (lastGroup && lastGroup.date === date) {
        lastGroup.items.push(transaction);
      } else {
        days.push({ date, items: [transaction] });
      }

      console.log("depois days: ", days);
      return days;
    }, []);

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

  if (loading || transactionList.length == 0)
    return <p>Carregando transações...</p>;

  return (
    <div className="tab-content" id="transactionTabsContent">
      {groupedTransactions.map((day, indexD) => (
        <div key={indexD}>
          <div className="transaction-date">
            <h6>{formatDateWithMonthName(day.date)}</h6>
            <span className="text-gray">
              Saldo do dia{" "}
              <strong>
                {formatAmount(
                  day.items.reduce((total, item) => {
                    switch (item.entry) {
                      case ENTRY.CREDIT:
                        return total + item.amount;
                      case ENTRY.DEBIT:
                        return total - item.amount;
                      default:
                        return total;
                    }
                  }, 0)
                )}
              </strong>
            </span>
          </div>

          <div className="border border-opacity-50 rounded-4 mb-3 py-3 grid row-gap-5">
            {day.items.map((transaction, index) => (
              <Transaction
                transaction={transaction}
                index={index}
                key={transaction.id}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TransactionList;
