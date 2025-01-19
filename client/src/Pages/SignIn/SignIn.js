import React, { useContext, useState } from "react";
import "./SignIn.css";
import UserContext from "../../context/UserContext";

const SignIn = () => {
  const { language, isDarkMode } = useContext(UserContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  return (
    <div className={`signIn ${isDarkMode ? "signIn_dark" : "signIn_light"}`}>
      <div className="signIn_formContainer">
        <h2>{language === "En" ? "Sign In" : "تسجيل الدخول"}</h2>
        <form className="signIn_form">
          <input
            type="text"
            id="email"
            placeholder={language === "En" ? "Email:" : " الايميل:"}
            name="username"
          />
          <input
            type="password"
            id="password"
            placeholder={language === "En" ? "Password:" : "كلمة المرور:"}
            name="password"
          />
          <button type="submit">
            {language === "En" ? "Sign In" : "تسجيل الدخول"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
