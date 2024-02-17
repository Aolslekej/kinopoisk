import React from "react";
import { useState } from "react";
import "./login.css";

export default function Profile() {
  const [arr, setArr] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(true);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const addPost = () => {
    setArr([...arr, { name, password }]);
  };

  return (
    <div className="form">
      {isOpenModal && (
        <form action="" className="modal">
          <h1 className="create">Create Account</h1>
          <div className="itemprof">
            <input
              placeholder="Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="profinp"
            />
          </div>
          <div className="itemprof">
            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="profinp"
            />
          </div>
          <button type="button" onClick={() => {setIsOpenModal(false);addPost()}} className="create-button">
            Create
          </button>
        </form>
      )}
    </div>
  );
}
