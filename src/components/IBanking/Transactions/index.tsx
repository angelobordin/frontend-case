import { useEffect, useState } from "react";
import TransactionService, {
  IDateTransactions,
  TransactionListResponse,
} from "./service";
import "./index.css";

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

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
      .format(date)
      .replace(" de ", " ");
  };

  const formatDateWithMonthName = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(amount);
  };

  useEffect(() => {
    getTransactionList();
  }, []);

  if (loading) return <p>Carregando transações...</p>;

  return (
    <div className="container mt-5">
      <ul
        className="nav nav-pills mb-3 grid gap-4"
        id="transactionTabs"
        role="tablist"
      >
        <li className="nav-item">
          <button type="button" className="btn button-custom">
            Débito
          </button>
        </li>
        <li className="nav-item">
          <button type="button" className="btn button-custom">
            Crédito
          </button>
        </li>
      </ul>

      <div className="tab-content" id="transactionTabsContent">
        {transactions.results.map((day, index) => (
          <div key={index}>
            <div className="transaction-date">
              <h6>{formatDateWithMonthName(day.date)}</h6>
              {/* <p className="text-color-end">
                    <strong>Saldo do dia {transaction.balance}</strong>
                  </p> */}
            </div>
            <div className="border border-opacity-50 rounded-4 mb-3 py-3 grid row-gap-5">
              {day.items.map((transaction, index) => (
                <div className="row m-2" key={index}>
                  <div className="col-7 d-flex flex-row">
                    <div className="row w-100">
                      <span className="col-1">
                        {transaction.entry === "CREDIT" ? (
                          <i className="bi bi-arrow-90deg-up text-color-success"></i>
                        ) : (
                          <i className="bi bi-arrow-90deg-down text-color-error"></i>
                        )}
                      </span>
                      <div className="col-11">
                        <div className="row">
                          <h6 className="col-5 mb-0 fw-medium">
                            {transaction.name}
                          </h6>
                          <p className="col-7 mb-0 text-truncate text-start">
                            {transaction.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-5 d-flex justify-content-between">
                    <div>
                      <small>{formatDate(transaction.dateEvent)}</small>
                    </div>
                    <div>
                      <p
                        className={`mb-0 fw-bold ${
                          transaction.entry === "CREDIT"
                            ? "text-color-success"
                            : "text-color-error"
                        }`}
                      >
                        {transaction.entry === "CREDIT" ? "+ " : "- "}
                        {formatAmount(transaction.amount)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Transactions;
