import React, { useState } from "react";
export default function ContactForm(props) {
  const [person, setPerson] = useState("");
  const [number, setNumber] = useState("");

  function handleChange(e) {
    setPerson(e.target.value);
  }

  function handleSubmit(e) {
    if (
      person !== "" &&
      number !== "" &&
      !isNaN(number) &&
      number.length === 10
    ) {
      props.handleSubmit({ name: person, number });
      setPerson("");
      setNumber("");
    }
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Name"
        onChange={handleChange}
        value={person}
      />
      <input
        type="tel"
        placeholder="Enter Number"
        onChange={(e) => setNumber(e.target.value)}
        value={number}
      />
      <button type="submit">+</button>
    </form>
  );
}
