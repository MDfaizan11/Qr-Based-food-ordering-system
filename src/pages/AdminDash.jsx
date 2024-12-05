import React from "react";
import icon from "../assets/images/download (5).png";
import { NavLink } from "react-router-dom";
function AdminDash() {
  return (
    <>
      <div className="admin_heading">
        <h1 style={{ textAlign: "center" }}>
          <b style={{ color: "#a82c48" }}>FOODIES </b> Dashboard
        </h1>
      </div>

      <div className="dash_wrapper">
        <NavLink to={"order"} className={"dash_nav"}>
          <div className="check_order">
            <div className="desh_images">
              <img src={icon} alt="" />
            </div>
            <div className="count">
              <h3 style={{ color: "#a82c48" }}>811+</h3>
            </div>
            <h1>Check Order</h1>
          </div>
        </NavLink>

        <NavLink to={"product"} className={"dash_nav"}>
          <div className="check_order">
            <div className="desh_images">
              <img src={icon} alt="" />
            </div>
            <div className="count">
              <h3 style={{ color: "#a82c48" }}>50+</h3>
            </div>
            <h1>Available Item</h1>
          </div>
        </NavLink>

        <NavLink to={"new"} className={"dash_nav"}>
          <div className="check_order">
            <div className="desh_images">
              <img src={icon} alt="" />
            </div>

            <h1>Add Product</h1>
          </div>
        </NavLink>
        <NavLink to={"/"} className={"dash_nav"}>
          <div className="check_order">
            <h1>Log Out</h1>
          </div>
        </NavLink>
      </div>
    </>
  );
}

export default AdminDash;
