import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div
      className="card_container"
      onClick={() => props.delCard(props.object.id)}
    >
      <div className="card_title">
        <Link to="/filmpage">
        </Link>
        <h2>{props.object.title}</h2>
      </div>
    </div>
  );
}
