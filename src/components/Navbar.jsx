import React, { useState } from "react";
import "./navbar.scss";
import { assets } from "../assets/assets";

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    return (
        <div className="navbar">
            <img src={assets.logo} alt="" className="logo" />
            <ul className="navbar_menu">
                <li
                    onClick={() => setMenu("home")}
                    className={menu === "home" ? "active" : ""}
                >
                    home
                </li>
                <li
                    onClick={() => setMenu("menu")}
                    className={menu === "menu" ? "active" : ""}
                >
                    menu{" "}
                </li>
                <li
                    onClick={() => setMenu("mobile-app")}
                    className={menu === "mobile-app" ? "active" : ""}
                >
                    moboile-app
                </li>
                <li
                    onClick={() => setMenu("contact-us")}
                    className={menu === "contact-us" ? "active" : ""}
                >
                    contact us
                </li>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} className="logo1" alt="" />
                <div className="navbar-search-icon">
                    <img src={assets.basket_icon} alt="" className="logo1" />
                    <div className="dot"></div>
                </div>
                <button>signin</button>
            </div>
        </div>
    );
};

export default Navbar;
