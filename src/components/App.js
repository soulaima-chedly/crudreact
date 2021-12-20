import axios from "axios";
import React, { useEffect, useState } from "react";
import Book from "./Book";
import List from "./List";
import Form from "./Form";

export default function App() {
  const [form, setForm] = useState({
    name: "",
    author: "",
    quantity: "",
    price: "",
    release_date: "",
  });

  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://acelens.me:8888/api/books", {
        headers: {
          Authorization: "Bearer BOOKS_API_TOKEN_KEY",
        },
      })
      .then((res) => {
        setBooks(res.data.data);
      });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    axios.post(
      "http://acelens.me:8888/api/books?name=" +
        form.name +
        "&author=" +
        form.author +
        "&quantity=" +
        form.quantity +
        "&price=" +
        form.price +
        "&release_date=" +
        form.release_date,
      {},
      {
        headers: {
          Authorization: "Bearer BOOKS_API_TOKEN_KEY",
        },
      }
    );
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <div>
        <div>
          <Form
            form={form}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            mode="Add Book"
          />
          <Book book={form} />
        </div>

        <List books={books} handleChange={handleChange} setBooks={setBooks} />
      </div>
    </div>
  );
}
