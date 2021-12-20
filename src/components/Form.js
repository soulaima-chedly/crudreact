import React from "react";

function Form(props) {
  return (
    <div>
      <h1>{props.mode} Form</h1>
      <form onSubmit={props.handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            required
            type="text"
            name="name"
            value={props.form.name}
            onChange={props.handleChange}
          />
        </div>
        <div>
          <label>Author: </label>
          <input
            required
            type="text"
            name="author"
            value={props.form.author}
            onChange={props.handleChange}
          />
        </div>
        <div>
          <label>Quantity: </label>
          <input
            required
            type="number"
            name="quantity"
            value={props.form.quantity}
            onChange={props.handleChange}
          />
        </div>
        <div>
          <label>Price: </label>
          <input
            required
            name="price"
            type="number"
            value={props.form.price}
            onChange={props.handleChange}
          />
        </div>
        <div>
          <label>Release Date: </label>
          <input
            required
            type="date"
            name="release_date"
            value={props.form.release_date}
            onChange={props.handleChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
