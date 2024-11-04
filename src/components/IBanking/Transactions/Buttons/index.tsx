import "./index.css";
import { IButtonProps } from "../interfaces";

function Buttons({ handleFilter, filter }: IButtonProps) {
  return (
    <div className="nav nav-pills mb-3 grid gap-3">
      <button
        type="button"
        className={`btn button-custom ${
          filter === "DEBIT" ? "active" : "inactive"
        }`}
        onClick={() => handleFilter("DEBIT")}
      >
        Débito
      </button>
      <button
        type="button"
        className={`btn button-custom ${
          filter === "CREDIT" ? "active" : "inactive"
        }`}
        onClick={() => handleFilter("CREDIT")}
      >
        Crédito
      </button>
    </div>
  );
}

export default Buttons;
