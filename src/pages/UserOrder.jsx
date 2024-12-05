import React, { useState, useEffect } from "react";
import "../style/userorder.css";
function UserOrder() {
  const [orderProduct, setOrderProduct] = useState([]);
  useEffect(() => {
    let userData = JSON.parse(localStorage.getItem("confirmedOrders"));
    if (userData) {
      setOrderProduct(userData);
    }
  }, []);

  return (
    <>
      <div className="user_heading">
        <h1 style={{ textAlign: "center" }} className="order_heading">
          <b style={{ color: "#a82c48" }}>FOODIES </b> Place Order
        </h1>
      </div>

      <div className="table_section">
        <table>
          <tbody>
            {orderProduct.map((order, index) => (
              <tr key={index} className="table_main_wrapper">
                <td className="table_number">
                  <p>Table Number: {order.tableNumber}</p>
                </td>
                <td>
                  <div className="table_order_wrapper">
                    {order.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="table_order">
                        <p>{item.name}</p>
                        <p>Price: {item.price}</p>
                        <p>Quantity: {item.quantity}</p>
                      </div>
                    ))}
                  </div>
                </td>
                <td>
                  <p>Total Amount: {order.totalAmount}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default UserOrder;
