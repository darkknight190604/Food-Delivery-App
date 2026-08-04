import React, { useState } from "react";
import "./NavBar.css";
import { assets } from "../../assets/assets";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NavBar = () => {
    const [menu, setMenu] = useState("home");

    const navigate = useNavigate();
    const location = useLocation();

    const scrollToSection = (id, menuItem) => {
        setMenu(menuItem);

        const scroll = () => {
            document.getElementById(id)?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        };

        if (location.pathname !== "/") {
            navigate("/");
            setTimeout(scroll, 200);
        } else {
            scroll();
        }
    };

    return (
        <div className="navbar">
            <Link to="/" onClick={() => setMenu("home")}>
                <img src={assets.logo} alt="Logo" className="logo" />
            </Link>

            <ul className="navbar-menu">
                <li>
                    <Link
                        to="/"
                        className={menu === "home" ? "active" : ""}
                        onClick={() => setMenu("home")}
                    >
                        Home
                    </Link>
                </li>

                <li
                    className={menu === "menu" ? "active" : ""}
                    onClick={() => scrollToSection("explore-menu", "menu")}
                >
                    Menu
                </li>

                <li
                    className={menu === "mobile-app" ? "active" : ""}
                    onClick={() => scrollToSection("app-download", "mobile-app")}
                >
                    Mobile App
                </li>

                <li
                    className={menu === "contact-us" ? "active" : ""}
                    onClick={() => scrollToSection("footer", "contact-us")}
                >
                    Contact Us
                </li>
            </ul>

            <div className="navbar-right">
                <img src={assets.search_icon} alt="Search" />

                <div className="navbar-search-icon">
                    <img src={assets.basket_icon} alt="Cart" />
                    <div className="dot"></div>
                </div>

                <button>Log In</button>
            </div>
        </div>
    );
};

export default NavBar;