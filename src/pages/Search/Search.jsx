import React from "react";
import Form from "../../Components/Form/Form";
import Card from "../../Components/Card/Card";
import { useState } from "react";

export default function Search() {
  const [arr, setArr] = useState([]);

  function delCard(id) {
    const copyArr = [...arr];
    const resultArr = copyArr.filter((item) => item.id != id);
    setArr(resultArr);
  }

  const addPost = (name, phone, text, email, deliv) => {
    setArr([...arr, { id: Date.now(), name, phone, text, email, deliv }]);
    console.log(arr);
  };
  return (
    <div>
      <Form addPost={addPost} />

      {arr.map((item, index) => (
        <Card object={item} delCard={delCard} key={index} />
      ))}
    </div>
  );
}
