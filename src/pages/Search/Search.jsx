import React from "react";
import "../../Components/Form/form.css";
import Card from "../../Components/Card/Card";
import films from "../../films.json";
import searchImg from "../../images/search.png";
import { useState } from "react";

export default function Search() {
  const [arr, setArr] = useState(films);
  const [name, setName] = useState("");

  function delCard(id) {
    const copyArr = [...arr];
    const resultArr = copyArr.filter((item) => item.id != id);
    setArr(resultArr);
  }

  const addPost = arr.filter((film) => {
    return film.title.toLowerCase().includes(name.toLowerCase());
  });
  return (
    <div>
      <form action="">
        <div className="searching">
          <input
            placeholder="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <img
            src={searchImg}
            alt=""
            className="search buy"
            type="button"
          />
        </div>
        <h1 className="searched">Your Searches</h1>
      </form>

      {addPost.map((item, index) => (
        <Card object={item} delCard={delCard} key={index} />
      ))}
    </div>
  );
}
