import React, { useContext, useState } from "react";
import "./NavBar.css";
import { assets } from "../../assets/assets";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const NavBar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState("home");

    const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

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

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
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
                    <Link to="/cart">
                        <img src={assets.basket_icon} alt="Cart" />
                    </Link>
                    <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
                </div>

                {!token ? (
                    <button onClick={() => setShowLogin(true)}>Sign In</button>
                ) : (
                    <div className="navbar-profile">
                        <img src={assets.profile_icon} alt="profile_icon" />

                        <ul className="navbar-profile-dropdown">
                            <li>
                                <img src={assets.bag_icon} alt="" />
                                <p>Orders</p>
                            </li>

                            <hr />

                            <li onClick={logout}>
                                <img src={assets.logout_icon} alt="" />
                                <p>Logout</p>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NavBar;