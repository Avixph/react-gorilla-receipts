import "../css/Receipt.css";

function Receipt({ receipt }) {
  return (
    <main className="app-view">
      <div className="single-receipt">
        <h3 className="person-name">{receipt.person}</h3>
        <div className="order">
          <h5>
            <span className="order-items">Main:</span> {receipt.order.main}
          </h5>
          <h5>
            <span className="order-items">Protein:</span>{" "}
            {receipt.order.protein}
          </h5>
          <h5>
            <span className="order-items">Rice:</span> {receipt.order.rice}
          </h5>
          <h5>
            <span className="order-items">Sauce:</span> {receipt.order.sauce}
          </h5>
          <h5>
            <span className="order-items">Drink:</span> {receipt.order.drink}
          </h5>
          <h5>
            <span className="order-items">Cost:</span> ${receipt.order.cost}
          </h5>
        </div>
      </div>
    </main>
  );
}

export default Receipt;
