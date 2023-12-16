import React from "react";
import "./card.css";
import img from "../../images/geo.svg";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div
      className="card_container"
      onClick={() => props.delCard(props.object.id)}
    >
      <div className="card_title">
        <Link to="/filmpage">
          <img src={img} alt="" />
        </Link>
        <h2>{props.object.name}</h2>
      </div>
    </div>
  );
}
