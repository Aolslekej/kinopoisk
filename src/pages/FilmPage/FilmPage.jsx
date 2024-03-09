import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import films from '../../films.json';
import cross from "../../images/cross.png";
import "./filmpage.css";

export default function FilmPage() {
  const {id} = useParams();
  const movie = films.movies.find(movie => movie.id === parseInt(id));
  return (
    <div className="page">
      <div className="container">
        <Link to="/">
          <img src={cross} alt="" className="back"/>
        </Link>
        <h2 className="filmName">{movie.title}</h2>
        <div className="items">
          <h3 className="age">15+</h3>
          <h3 className="author">Sunghoo Park</h3>
          <h3 className="netflix">Netflix</h3>
        </div>
      </div>
    </div>
  );
}
