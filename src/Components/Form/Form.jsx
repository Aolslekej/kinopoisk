import React from "react";
import "./form.css";
import { useState } from "react";

export default function Form(props) {
  const [name, setName] = useState("");
  return (
    <form action="">
      <input
        placeholder="Имя"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
       <button
        type="button"
        className="buy"
        onClick={() => {
          props.addPost(name);
          setName("");
        }}
      >
        Найти
      </button>
      <h1 className="searched">Your Searches</h1>
    </form>
  );
}
