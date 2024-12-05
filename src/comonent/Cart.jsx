// import React, { useEffect, useState } from "react";
// import "../App.css";
// import Header from "../comonent/Header";

// function Cart() {
//   const [orderProduct, setOrderProduct] = useState([]);
//   const [totalAmount, setTotalAmount] = useState(0);

//   useEffect(() => {
//     const existingItem = JSON.parse(localStorage.getItem("selectedItem"));
//     if (existingItem) {
//       setOrderProduct(existingItem);
//       calculateTotalAmount(existingItem);
//     }
//   }, []);

//   const calculateTotalAmount = (selectedItem) => {
//     let total = 0;
//     selectedItem.forEach((item) => {
//       total += (item.price || 0) * (item.quantity || 1);
//     });
//     setTotalAmount(total);
//   };

//   const handleIncrement = (id) => {
//     const updatedOrderProduct = orderProduct.map((item) => {
//       if (item.id === id) {
//         return { ...item, quantity: (item.quantity || 1) + 1 };
//       }
//       return item;
//     });
//     setOrderProduct(updatedOrderProduct);
//     calculateTotalAmount(updatedOrderProduct);
//   };

//   const handleDecrement = (id) => {
//     const updatedOrderProduct = orderProduct.map((item) => {
//       if (item.id === id && item.quantity > 1) {
//         return { ...item, quantity: item.quantity - 1 };
//       }
//       return item;
//     });
//     setOrderProduct(updatedOrderProduct);
//     calculateTotalAmount(updatedOrderProduct);
//   };

//   const handleCheckout = () => {
//     const tableNumberInput = document.querySelector(".cart_table_input input");

//     if (tableNumberInput && tableNumberInput.value.trim() !== "") {
//       const confirmedOrder = {
//         items: orderProduct,
//         totalAmount: totalAmount,
//         tableNumber: tableNumberInput.value.trim(),
//       };

//       let confirmedOrders =
//         JSON.parse(localStorage.getItem("confirmedOrders")) || [];
//       confirmedOrders.push(confirmedOrder);
//       localStorage.setItem("confirmedOrders", JSON.stringify(confirmedOrders));

//       tableNumberInput.value = "";

//       setOrderProduct([]);
//       setTotalAmount(0);
//       localStorage.removeItem("selectedItem");
//     } else {
//       alert("Please enter your table number.");
//       return;
//     }
//   };

//   function handleDelete(id) {
//     let deleteItem = orderProduct.filter((item) => {
//       return item.id !== id;
//     });
//     setOrderProduct(deleteItem);
//     localStorage.setItem("selectedItem", JSON.stringify(deleteItem));
//   }

//   return (
//     <>
//       <Header />
//       <p className="cart_heading">Order Item</p>

//       {orderProduct.map((item, index) => {
//         return (
//           <div key={index} className="cart_container">
//             <img src={item.image} alt={item.name} />
//             <div className="cart_specification">
//               <p>{item.name}</p>
//               <p>Price: {item.price}</p>
//               <p className="cart_quantity">
//                 Quantity:
//                 <button
//                   onClick={() => handleIncrement(item.id)}
//                   className="cart_button"
//                 >
//                   +
//                 </button>
//                 <span>{item.quantity || 1}</span>
//                 <button
//                   onClick={() => handleDecrement(item.id)}
//                   className="cart_button"
//                 >
//                   -
//                 </button>
//               </p>
//             </div>
//             <button
//               onClick={() => handleDelete(item.id)}
//               className="cart_delete"
//             >
//               Delete Item
//             </button>
//           </div>
//         );
//       })}

//       <div className="cart_total_price">
//         <p>Total Price: {totalAmount}</p>
//       </div>
//       <div className="cart_table_input">
//         <input type="text" placeholder="Enter table number" />
//       </div>
//       <div className="cart_chechout_button">
//         <button className="check_outsection" onClick={handleCheckout}>
//           Confirm Order
//         </button>
//       </div>
//     </>
//   );
// }

// export default Cart;

import React, { useEffect, useState } from "react";
import "../App.css";
import Header from "../comonent/Header";

function Cart() {
  const [orderProduct, setOrderProduct] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const existingItem = JSON.parse(localStorage.getItem("selectedItem"));
    if (existingItem) {
      setOrderProduct(existingItem);
      calculateTotalAmount(existingItem);
    }
  }, []);

  const calculateTotalAmount = (selectedItem) => {
    let total = 0;
    selectedItem.forEach((item) => {
      total += (item.price || 0) * (item.quantity || 1);
    });
    setTotalAmount(total);
  };

  const handleIncrement = (id) => {
    const updatedOrderProduct = orderProduct.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: (item.quantity || 0) + 1 };
      }
      return item;
    });
    setOrderProduct(updatedOrderProduct);
    calculateTotalAmount(updatedOrderProduct);
  };

  const handleDecrement = (id) => {
    const updatedOrderProduct = orderProduct.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setOrderProduct(updatedOrderProduct);
    calculateTotalAmount(updatedOrderProduct);
  };

  const handleCheckout = () => {
    const tableNumberInput = document.querySelector(".cart_table_input input");

    if (tableNumberInput && tableNumberInput.value.trim() !== "") {
      // Ensure default quantity is set to 1 if not specified by the user
      const updatedOrderProduct = orderProduct.map((item) => ({
        ...item,
        quantity: item.quantity || 1,
      }));

      const confirmedOrder = {
        items: updatedOrderProduct,
        totalAmount: totalAmount,
        tableNumber: tableNumberInput.value.trim(),
      };

      let confirmedOrders =
        JSON.parse(localStorage.getItem("confirmedOrders")) || [];
      confirmedOrders.push(confirmedOrder);
      localStorage.setItem("confirmedOrders", JSON.stringify(confirmedOrders));

      tableNumberInput.value = "";

      setOrderProduct([]);
      setTotalAmount(0);
      localStorage.removeItem("selectedItem");
    } else {
      alert("Please enter your table number.");
      return;
    }
  };

  function handleDelete(id) {
    let deleteItem = orderProduct.filter((item) => {
      return item.id !== id;
    });
    setOrderProduct(deleteItem);
    localStorage.setItem("selectedItem", JSON.stringify(deleteItem));
  }

  return (
    <>
      <Header />
      <p className="cart_heading">Order Item</p>

      {orderProduct.map((item, index) => {
        return (
          <div key={index} className="cart_container">
            <img src={item.image} alt={item.name} />
            <div className="cart_specification">
              <p>{item.name}</p>
              <p>Price: {item.price}</p>
              <p className="cart_quantity">
                Quantity:
                <button
                  onClick={() => handleIncrement(item.id)}
                  className="cart_button"
                >
                  +
                </button>
                <span>{item.quantity || 1}</span>
                <button
                  onClick={() => handleDecrement(item.id)}
                  className="cart_button"
                >
                  -
                </button>
              </p>
            </div>
            <button
              onClick={() => handleDelete(item.id)}
              className="cart_delete"
            >
              Delete Item
            </button>
          </div>
        );
      })}

      <div className="cart_total_price">
        <p>Total Price: {totalAmount}</p>
      </div>
      <div className="cart_table_input">
        <input type="text" placeholder="Enter table number" />
      </div>
      <div className="cart_chechout_button">
        <button className="check_outsection" onClick={handleCheckout}>
          Confirm Order
        </button>
      </div>
    </>
  );
}

export default Cart;
