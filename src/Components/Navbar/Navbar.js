import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo-orange-1.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [scrollTop, setScrollTop] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);

  const handleToScroll = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY >= 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="nav-container">
        <Link to="/">
          <img
            onClick={() => setMenu("shop")}
            className="nav-logo"
            src={logo}
            alt="logo"
          ></img>
        </Link>

        <ul className="nav-menu">
          <li onClick={() => setMenu("shop")}>
            <Link to="/">Shop</Link>
            {menu === "shop" ? <hr /> : <></>}
          </li>
          <li onClick={() => setMenu("mens")}>
            <Link to="/mens">Nam</Link>
            {menu === "mens" ? <hr /> : <></>}
          </li>
          <li onClick={() => setMenu("womens")}>
            <Link to="/womens">Nữ</Link>
            {menu === "womens" ? <hr /> : <></>}
          </li>
          <li onClick={() => setMenu("kids")}>
            <Link to="/kids">Trẻ em</Link>
            {menu === "kids" ? <hr /> : <></>}
          </li>
        </ul>

        <div className="nav-login-cart">
          <button onClick={() => setMenu("")}>
            <Link to="/login">Đăng ký</Link>
          </button>
          <Link to="/cart">
            <img
              onClick={() => setMenu("")}
              src={cart_icon}
              alt="cart_icon"
            ></img>
          </Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>

        {scrollTop && (
          <FontAwesomeIcon
            icon={faChevronUp}
            className="up-to-icon"
            onClick={() => handleToScroll()}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
