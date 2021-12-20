import axios from "axios";
import React from "react";

export default function Book(props) {
  function handleDelete(id) {
    axios.delete("http://acelens.me:8888/api/books/" + id, {
      headers: {
        Authorization: "Bearer BOOKS_API_TOKEN_KEY",
      },
    });
  }

  if (props.book) {
    return (
      <div>
        <h1>Book</h1>

        <table>
          <tr>
            <th>Name</th>
            <th>Author</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Release Date</th>
          </tr>
          <tr>
            <td>{props.book.name}</td>
            <td>{props.book.author}</td>
            <td>{props.book.quantity}</td>
            <td>{props.book.price}</td>
            <td>{props.book.release_date}</td>
          </tr>
        </table>

        <button
          onClick={() => {
            handleDelete(props.book.id);
          }}
        >
          Delete
        </button>
      </div>
    );
  } else return "";
}
