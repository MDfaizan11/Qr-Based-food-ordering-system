import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import "../comonent/dashboard.css";
import { RxDashboard } from "react-icons/rx";
import { IoIosAddCircleOutline } from "react-icons/io";
import { GiProgression } from "react-icons/gi";
import { AiOutlineLogout } from "react-icons/ai";
import { FaFirstOrderAlt } from "react-icons/fa";
function Dashboard({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`main ${isOpen ? "open" : "closed"}`}>
        <div className={`link_side ${isOpen ? "open" : "closed"}`}>
           <NavLink
            to={"/admin"}
            className={"dash_link"}
            onClick={toggleSidebar}
          >
            <RxDashboard /> Admin DashBoard
          </NavLink>
          <NavLink to={"new"} className={"dash_link"} onClick={toggleSidebar}>
            <IoIosAddCircleOutline /> Add New Dish
          </NavLink>
          <NavLink
            to={"product"}
            className={"dash_link"}
            onClick={toggleSidebar}
          >
            <GiProgression /> Product
          </NavLink>
          <NavLink to={"order"} className={"dash_link"} onClick={toggleSidebar}>
            <FaFirstOrderAlt /> User Order
          </NavLink>
          <NavLink to={"/"} className={"dash_link"} onClick={toggleSidebar}>
            <AiOutlineLogout /> Log out
          </NavLink>
        </div>
        <div className="toggle-btn" onClick={toggleSidebar}>
          {isOpen ? <ImCross /> : <GiHamburgerMenu />}
        </div>
        <div className="outlet_side">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
