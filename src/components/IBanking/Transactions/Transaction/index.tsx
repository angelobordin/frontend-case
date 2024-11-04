import {
  formatAmount,
  formatDate,
} from "../../../../Utils/functions/formaters";
import { ITransaction } from "../interfaces";

interface IProps {
  transaction: ITransaction;
  key: string;
}

function Transaction({ transaction, key }: IProps) {
  return (
    <div className="row m-2" key={key}>
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
              <h6 className="col-5 mb-0 fw-medium">{transaction.name}</h6>
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
  );
}

export default Transaction;
