import { useState } from "react";
import Buttons from "./Buttons";
import TransactionList from "./List";

import "./index.css";

function Transactions() {
  const [filter, setFilter] = useState("");

  const handleFilterTransactions = (newFilter: string) => {
    if (newFilter == filter) {
      setFilter("");
    } else {
      setFilter(newFilter);
    }
  };

  return (
    <div className="container mt-5">
      <Buttons handleFilter={handleFilterTransactions} filter={filter} />
      <TransactionList filter={filter} />
    </div>
  );
}

export default Transactions;
