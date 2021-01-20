import { useState } from "react";
import "../css/Receipt.css";

function Receipt({ person, order, paid, ...receipt }) {
  const [toggler, setToggler] = useState(paid);

  const isPaid = () => {
    setToggler((toggler) => (toggler ? "Paid" : "Un-Paid"));
  };
  console.log(isPaid);

  return (
    <div className="app-view">
      <div className="single-receipt">
        <h3 className="person-name">{person}</h3>
        <div className="order">
          <h5>
            <span className="order-items">Main:</span> {order.main}
          </h5>
          <h5>
            <span className="order-items">Protein:</span> {order.protein}
          </h5>
          <h5>
            <span className="order-items">Rice:</span> {order.rice}
          </h5>
          <h5>
            <span className="order-items">Sauce:</span> {order.sauce}
          </h5>
          <h5>
            <span className="order-items">Toppings:</span>
            {order.toppings.map((topping) => {
              return ` ${topping}`;
            })}
          </h5>
          <h5>
            <span className="order-items">Drink:</span> {order.drink}
          </h5>
          <h5>
            <span className="order-items">Cost:</span> ${order.cost}
          </h5>
          <div className="paid-toggle">
            <button onClick={isPaid}>Paid</button>
            <h5>{toggler}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Receipt;
