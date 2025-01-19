import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaBook } from "react-icons/fa";
import UserContext from "../../context/UserContext";
import "./Header.css";

const Header = () => {
  const { isDarkMode, language, toggleTheme, toggleLanguage } =
    useContext(UserContext);
  const [isSigned, setIsSigned] = useState(false);
  return (
    <header
      className={`Header_container ${
        isDarkMode ? "Header_dark" : "Header_light"
      }`}
    >
      <div className="Header_left">
        <FaBook className="Header_icon" />
      </div>

      <div className="Header_right">
        <button className="Header_toggleTheme" onClick={toggleTheme}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>

        <button className="Header_toggleLanguage" onClick={toggleLanguage}>
          {language === "en" ? <h2>عربي</h2> : <h2>English</h2>}
        </button>
        <ul className="sign">
          <li>
            <Link className="signIn_btn" to="/SignIn">
              {isSigned
                ? language === "en"
                  ? "Signout"
                  : "تسجيل الخروج"
                : language === "en"
                ? "SignIn"
                : "تسجيل الدخول"}
            </Link>
          </li>
          <li>
            <Link className="signIn_btn" to="/SignUp">
              {language === "en" ? "SignUP" : "تسجيل الدخول"}
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
