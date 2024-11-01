import { useEffect, useState } from "react";
import TransactionService, {
  IDateTransactions,
  TransactionListResponse,
} from "./service";

const transactionService = new TransactionService();

function Transactions() {
  const [transactions, setTransactions] = useState<TransactionListResponse>({
    results: new Array<IDateTransactions>(),
    itemsTotal: 0,
  });
  const [loading, setLoading] = useState(true);
  const getTransactionList = async () => {
    try {
      const res = await transactionService.list();
      setTransactions(res);
    } catch (error) {
      console.log(`Algo deu errado: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTransactionList();
  }, []);

  if (loading) return <p>Carregando transações...</p>;

  return (
    <div>
      <h2>Lista de Transações</h2>
      {transactions.results.length === 0 ? (
        <p>Nenhuma transação encontrada.</p>
      ) : (
        <ul>
          {transactions.results.map((dateTransactions) =>
            dateTransactions.items.map((transaction) => (
              <li key={transaction.id}>
                <span>{dateTransactions.date}</span>
                <p>
                  <strong>ID:</strong> {transaction.id}
                </p>
                <p>
                  <strong>Descrição:</strong> {transaction.description}
                </p>
                <p>
                  <strong>Valor:</strong> R$ {transaction.amount.toFixed(2)}
                </p>
                <p>
                  <strong>Data:</strong>{" "}
                  {new Date(transaction.dateEvent).toLocaleDateString()}
                </p>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}

export default Transactions;
