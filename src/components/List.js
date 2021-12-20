import React from "react";
import Book from "./Book";

export default function List(props) {
  return (
    <div>
      <h1>Books</h1>
      {props.books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
}
