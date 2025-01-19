import React, { useContext, useState } from "react";
import UserContext from "../../context/UserContext"; // Adjust the path based on your project structure
import BookCard from "../../Components/BookCard/BookCard"; // Adjust path based on BookCard's location
import "./MyBooks.css";

const MyBooks = (books) => {
  const { myCart, readBooks, isBookmarked, isFavorite, isDarkMode, language } =
    useContext(UserContext);
  const [selectedOption, setSelectedOption] = useState("lastView");
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  const handleLastView = () => {};

  const renderBooks = (sectionTitleEn, sectionTitleAr) => {
    return (
      <div className="MyBooks_section">
        <h2 className="MyBooks_sectionTitle">
          {language === "en" ? sectionTitleEn : sectionTitleAr}
        </h2>
        <div className="MyBooks_booksContainer">
          {books.length > 0 ? (
            books.map((book, index) => <BookCard key={index} book={book} />)
          ) : (
            <p className="MyBooks_noBooks">
              {language === "en" ? "No books available" : "لا توجد كتب"}
            </p>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className={`MyBooks ${isDarkMode ? "MyBooks_dark" : "MyBooks_light"}`}>
      <div className="MyBooks_container">
        <div className="MyBooks_account-section">
          <h2>{language === "en" ? "My Books" : "كتبي"}</h2>
          <ul>
            <li
              className={
                selectedOption === "read" ? "MyBooks_active" : undefined
              }
              onClick={() => {
                handleOptionClick("read");
              }}
            >
              {language === "en" ? "Still reading" : "مستمر في القرائة"}
            </li>
            <li
              className={
                selectedOption === "favorite" ? "MyBooks_active" : undefined
              }
              onClick={() => {
                handleOptionClick("favorite");
              }}
            >
              {language === "en" ? "My Favorite Books" : "كتبي المفضلة"}
            </li>
            <li
              className={
                selectedOption === "Watvh_Later" ? "MyBooks_active" : undefined
              }
              onClick={() => {
                handleOptionClick("Watvh_Later");
              }}
            >
              {language === "en" ? "Watch later" : "المشاهدة لاحقاّ"}
            </li>
            <li
              className={
                selectedOption === "finished" ? "MyBooks_active" : undefined
              }
              onClick={() => {
                handleOptionClick("finished");
              }}
            >
              {language === "en"
                ? "Finished reading Books"
                : "الكتب المنهي من قرائتها"}
            </li>
          </ul>
        </div>
        <main>
          {selectedOption && (
            <>
              <form>
                {selectedOption === "read" && (
                  <div className={"MyBooks_form-group"}>{renderBooks()}</div>
                )}
                {selectedOption === "favorite" && (
                  <div className={"MyBooks_form-group"}>{renderBooks()}</div>
                )}
                {selectedOption === "Watvh_Later" && (
                  <>
                    <div className="MyBooks_form-group">{renderBooks()}</div>
                  </>
                )}
                {selectedOption === "finished" && (
                  <>
                    <div className="MyBooks_form-group">{renderBooks()}</div>
                  </>
                )}
              </form>
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default MyBooks;
