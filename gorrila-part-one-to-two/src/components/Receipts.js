import { useState } from "react";
import Receipt from "./Receipt";
import records from "../Data/Records";
import "../css/Receipts.css";

function Receipts() {
  const [receipts, setReceipts] = useState(records);
  console.log(receipts);

  return (
    <main className="app-main">
      {receipts.map((receipt, index) => {
        return <Receipt receipt={receipt} key={index} />;
      })}
    </main>
  );
}

export default Receipts;
