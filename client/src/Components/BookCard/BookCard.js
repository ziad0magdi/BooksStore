import React, { useContext, useState } from "react";
import { FaHeart, FaBookmark } from "react-icons/fa";
import "./BookCard.css";
import UserContext from "../../context/UserContext";

const BookCard = ({ book }) => {
  const { isDarkMode, language } = useContext(UserContext);
  const [isFavorite, setIsFavorite] = useState(false); // State for heart icon
  const [isBookmarked, setIsBookmarked] = useState(false); // State for bookmark icon

  // Toggle favorite status
  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  // Toggle bookmark status
  const toggleBookmark = () => {
    setIsBookmarked((prev) => !prev);
  };

  return (
    <div
      className={`BookCard ${isDarkMode ? "BookCard_dark" : "BookCard_light"}`}
    >
      <div className="BookCard_imageContainer">
        <img
          src={book.coverImage}
          alt={book.title}
          className="BookCard_image"
        />
        <FaHeart
          className={`BookCard_heartIcon ${isFavorite ? "favorite" : ""}`}
          onClick={toggleFavorite}
        />
        <FaBookmark
          className={`BookCard_bookmarkIcon ${
            isBookmarked ? "bookmarked" : ""
          }`}
          onClick={toggleBookmark}
        />
      </div>
      <h3 className="BookCard_title">{book.title}</h3>
      <div>
        <p className="BookCard_auther">Author: {book.auther}</p>
        <p className="BookCard_rating">Rating: {book.rating}</p>
      </div>
      <div>
        <p className="BookCard_publishDate">Published: {book.publishDate}</p>
        <p className="BookCard_price">Price: ${book.price}</p>
      </div>
      <button className="BookCard_button">
        {language === "en" ? "Read the book" : "أقرء الكتاب"}
      </button>
    </div>
  );
};

export default BookCard;
