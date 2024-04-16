import React, { useContext, useState } from "react";
import "./navbar.scss";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState("home");

    const { getTotalCartAmount } = useContext(StoreContext);

    return (
        <div className="navbar">
            <Link to="/">
                <img src={assets.logo} alt="" className="logo" />
            </Link>
            <ul className="navbar_menu">
                <Link
                    to="/"
                    onClick={() => setMenu("home")}
                    className={menu === "home" ? "active" : ""}
                >
                    home
                </Link>
                <a
                    href="#explore_menu"
                    onClick={() => setMenu("menu")}
                    className={menu === "menu" ? "active" : ""}
                >
                    menu{" "}
                </a>
                <a
                    href="#appdownload"
                    onClick={() => setMenu("mobile-app")}
                    className={menu === "mobile-app" ? "active" : ""}
                >
                    moboile-app
                </a>
                <a
                    href="#footer"
                    onClick={() => setMenu("contact-us")}
                    className={menu === "contact-us" ? "active" : ""}
                >
                    contact us
                </a>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} className="logo1" alt="" />
                <div className="navbar-search-icon">
                    <Link to="/cart">
                        <img
                            src={assets.basket_icon}
                            alt=""
                            className="logo1"
                        />
                    </Link>
                    <div
                        className={getTotalCartAmount() > 0 ? "dot" : ""}
                    ></div>
                </div>
                <button onClick={() => setShowLogin(true)}>signin</button>
            </div>
        </div>
    );
};

export default Navbar;
