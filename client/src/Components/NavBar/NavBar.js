import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";
import "./NavBar.css";

const NavBar = () => {
  const { isDarkMode, language } = useContext(UserContext);

  return (
    <nav
      className={`NavBar_container ${
        isDarkMode ? "NavBar_dark" : "NavBar_light"
      }`}
    >
      <ul className="NavBar_menu">
        <Link className="NavBar_link_item" to="/">
          <li className="NavBar_item">
            {language === "en" ? "Home" : "الرئيسية"}
          </li>
        </Link>

        <Link className="NavBar_link_item" to="/MyBooks">
          <li className="NavBar_item">
            {language === "en" ? "Books" : "الكتب"}
          </li>
        </Link>
        <Link className="NavBar_link_item" to="/Dashboard">
          <li className="NavBar_item">
            {language === "en" ? "Dashboard" : "لوحة التحكم"}
          </li>
        </Link>
        <Link className="NavBar_link_item" to="/About">
          <li className="NavBar_item">
            {language === "en" ? "About" : "من نحن"}
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
