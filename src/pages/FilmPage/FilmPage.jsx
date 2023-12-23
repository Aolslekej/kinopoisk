import React from "react";
import { Link } from "react-router-dom";
import "./filmpage.css";

export default function FilmPage() {
  return (
    <div>
      <div className="container">
        <Link to="/">
          <button>Back</button>
        </Link>
        <h2 className="filmName">Name</h2>
        <div className="items">
          <h3 className="age">15+</h3>
          <h3 className="author">Sunghoo Park</h3>
          <h3 className="netflix">Netflix</h3>
        </div>
      </div>
    </div>
  );
}
