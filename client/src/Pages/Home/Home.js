import React from "react";
import BookCard from "../../Components/BookCard/BookCard"; // Adjust the import path based on your file structure

const Home = ({ books }) => {
  console.log("books");
  console.log(books);
  return (
    <div className="HomePage">
      <h1 className="HomePage_title">Book Store</h1>
      <div className="HomePage_books">
        {books && books.length > 0 ? (
          books.map((book) => <BookCard key={book.id} book={book} />)
        ) : (
          <p className="HomePage_noBooks">No books available</p>
        )}
      </div>
    </div>
  );
};

export default Home;
