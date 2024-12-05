import "../App.css";
import { NavLink } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import "../comonent/header.css";
function Header() {
  const [toggle, settoggle] = useState(false);

  function handleClick() {
    settoggle(!toggle);
  }
  return (
    <>
      <header>
        <div className="company_name">
          <h1>Faizan</h1>
        </div>

        <nav className={toggle ? "nav_menu" : "nav_menuu"}>
          <NavLink
            to="/"
            style={{ textDecoration: "none" }}
            activeClassName="active"
            className="nav_item"
            onClick={() => settoggle(!toggle)}
          >
            Home
          </NavLink>
          <NavLink
            to="/menu"
            style={{ textDecoration: "none" }}
            className="nav_item"
            activeClassName="active"
            onClick={() => settoggle(!toggle)}
          >
            Menu
          </NavLink>

          <NavLink
            to="/cart"
            style={{ textDecoration: "none" }}
            activeClassName="active"
            className="nav_item"
            onClick={() => settoggle(!toggle)}
          >
            My Order
          </NavLink>

          <button className="header_button">789456123</button>
        </nav>

        <div className="icon" onClick={handleClick}>
          {!toggle ? <GiHamburgerMenu /> : <ImCross />}
        </div>
      </header>
    </>
  );
}

export default Header;
