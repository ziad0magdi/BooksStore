import React, { useContext, useState } from "react";
import "./SignUp.css";
import UserContext from "../../context/UserContext";

const SignUp = () => {
  const { language, isDarkMode } = useContext(UserContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  return (
    <div className={`SignUp ${isDarkMode ? "SignUp_dark" : "SignUp_light"}`}>
      <div className="SignUp_formContainer">
        <h2>{language === "En" ? "Sign Up as a member" : "إشتراك كعضو"}</h2>
        <h2>{language === "En" ? "Sign Up as a auther" : "إشتراك كمؤلف"}</h2>
        <form className="SignUp_form">
          <input
            type="text"
            id="name"
            placeholder={language === "en" ? "Name:" : " الإسم:"}
            name="username"
          />
          <input
            type="number"
            id="age"
            placeholder={language === "en" ? "Age:" : " العمر:"}
            name="user_age"
          />
          <input
            type="radio"
            id="male"
            className="radio_gender"
            placeholder={language === "en" ? "Male:" : " ذكر:"}
            name="gender"
          />
          <label for="mail">Male</label>
          <input
            type="radio"
            id="female"
            className="radio_gender"
            placeholder={language === "en" ? "Female:" : " أنثى:"}
            name="gender"
          />
          <label for="female">female</label>
          <input
            type="text"
            id="Phone"
            placeholder={language === "en" ? "Phone Number:" : " رقم الهاتم:"}
            name="username"
          />
          <input
            type="email"
            id="email"
            placeholder={language === "en" ? "email:" : "البريد الألكتروني:"}
            name="email"
          />
          <input
            type="password"
            id="password"
            placeholder={language === "en" ? "Password:" : "كلمة المرور:"}
            name="password"
          />
          <button type="submit">
            {language === "en" ? "Sign In" : "تسجيل الدخول"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
