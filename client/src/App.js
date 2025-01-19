import "./App.css";
import { React, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserContext from "./context/UserContext";
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import SignIn from "./Pages/SignIn/SignIn";
import MyBooks from "./Pages/MyBooks/MyBooks.js";
import AboutUs from "./Pages/AboutUs/AboutUs";
import SignUp from "./Pages/Signout/SignUp.js";
// import AdminDashBoard from "./Pages/AdminDashBoard/AdminDashBoard";

function App() {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );

  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "ar" : "en"));
    document.documentElement.setAttribute(
      "dir",
      language === "en" ? "rtl" : "ltr"
    );
  };

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  const [role, setRole] = useState("");

  const userValues = {
    role,
    setRole,
    language,
    setLanguage,
    isDarkMode,
    setIsDarkMode,
    toggleLanguage,
    toggleTheme,
  };

  const books = [
    {
      id: 1,
      coverImage: "https://via.placeholder.com/150",
      title: "Book Title 1",
      auther: "ziad",
      rating: 4.5,
      publishDate: "2023-06-15",
      price: 19.99,
    },
    {
      id: 2,
      coverImage: "https://via.placeholder.com/150",
      title: "Book Title 2",
      auther: "ziad",
      rating: 4.0,
      publishDate: "2021-09-10",
      price: 14.99,
    },
    {
      id: 3,
      coverImage: "https://via.placeholder.com/150",
      title: "Book Title 2",
      auther: "ziad",
      rating: 4.0,
      publishDate: "2021-09-10",
      price: 14.99,
    },
    {
      id: 4,
      coverImage: "https://via.placeholder.com/150",
      title: "Book Title 2",
      auther: "ziad",
      rating: 4.0,
      publishDate: "2021-09-10",
      price: 14.99,
    },
    {
      id: 5,
      coverImage: "https://via.placeholder.com/150",
      title: "Book Title 2",
      auther: "ziad",
      rating: 4.0,
      publishDate: "2021-09-10",
      price: 14.99,
    },
    {
      id: 6,
      coverImage: "https://via.placeholder.com/150",
      title: "Book Title 2",
      auther: "ziad",
      rating: 4.0,
      publishDate: "2021-09-10",
      price: 14.99,
    },
    {
      id: 7,
      coverImage: "https://via.placeholder.com/150",
      title: "Book Title 2",
      auther: "ziad",
      rating: 4.0,
      publishDate: "2021-09-10",
      price: 14.99,
    },
    {
      id: 8,
      coverImage: "https://via.placeholder.com/150",
      title: "Book Title 2",
      auther: "ziad",
      rating: 4.0,
      publishDate: "2021-09-10",
      price: 14.99,
    },
    {
      id: 9,
      coverImage: "https://via.placeholder.com/150",
      title: "Book Title 2",
      auther: "ziad",
      rating: 4.0,
      publishDate: "2021-09-10",
      price: 14.99,
    },
  ];

  return (
    <div className="App">
      <Router>
        <UserContext.Provider value={userValues}>
          <Header />
          <NavBar />
          <Routes>
            <Route path="/" element={<Home books={books} />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/MyBooks" element={<MyBooks books={books} />} />
            {/* <Route
              path="/AdminDashBoard"
              element={<AdminDashBoard books={books} />}
            /> */}
          </Routes>
          <Footer />
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
/*

*/
