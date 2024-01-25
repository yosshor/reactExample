import React, { useState } from "react";
import "./Form.css";

export default function Form() {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState();
  const [payment, setPayment] = useState();
  const [shipping, setShipping] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }
  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };
  const handlePaymentChange = (event) => {
    setPayment(event.target.value);
  };
  const handleShippinChange = (event) => {
    setShipping(event.target.value);
  };

  return (
        <div className="form-div">
          <input value={name} onChange={handleNameChange}></input>
          <p>Name : {name}</p>

          <input
            value={quantity}
            className="form-input"
            onChange={handleQuantityChange}
            type="number"
            min="1"
            max="50"
          ></input>
          <p>Quantity : {quantity}</p>

          <select value={payment} onChange={handlePaymentChange}>
            <option value="">Select an Option</option>
            <option value="Visa">Visa</option>
            <option value="Isracard">Isracard</option>
            <option value="MasterCard">Master Card</option>
          </select>
          <p>Payment Method : {payment}</p>

          <textarea value={comment} onChange={handleCommentChange}></textarea>
          <p>Commet:{comment}</p>

          <lable>
            <input
              value="Pick Up"
              type="radio"
              checked={shipping === "Pick Up" }
              onChange={handleShippinChange}
            ></input>
            Pick Up
          </lable>
          <br></br>
          <label>
            <input
              value="Delivery"
              type="radio"
              chacked={shipping === "Delivery"}
              onChange={handleShippinChange}
            ></input>
            Delivery
          </label>

          <p>Delivery:{shipping}</p>
        </div>
  );
}
