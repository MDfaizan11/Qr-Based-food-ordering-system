import React from "react";
import "../style/newdish.css";
function Newdish() {
  return (
    <>
      <div className="dish_heading">
        <h1 style={{ textAlign: "center" }}>
          <b>FOODIES </b> New Dish
        </h1>
      </div>
      <div className="form_wrapper">
        <div className="dish_form">
          <form action="">
            <div className="enter_name">
              <input type="text" placeholder="Enter Dish Name" />
            </div>
            {/* <div className="dish_type">
              <input type="text" placeholder="Enter Dish Type" />
            </div> */}
            <div className="enter_name">
              <input type="number" placeholder="Enter Dish Price" />
            </div>
            <div className="enter_name">
              <input type="text" placeholder="Enter Dish Discription" />
            </div>
            <div className="enter_name">
              <label htmlFor=""> Food Pic : </label>
              <input type="file" placeholder="Choose picture" />
            </div>
            <div className="dish_button">
              <button type="submit">Add Food</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Newdish;
