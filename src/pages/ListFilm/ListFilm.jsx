import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import listFilms from "../../listFilms.json";
import cross from "../../images/cross.png";
import "../FilmPage/filmpage.css";

export default function HomeFilm() {
  const { id } = useParams();
  const listFilm = listFilms.lists.find((film) => film.id === parseInt(id));
  return (
    <div className="page">
      <div className="container">
        <Link to="/">
          <img src={cross} alt="" className="back" />
        </Link>
        <h2 className="filmName">{listFilm.title}</h2>
        <div className="items">
          <h3 className="age">{listFilm.age}</h3>
          <h3 className="author">{listFilm.director}</h3>
          <h3 className="netflix">Netflix</h3>
        </div>
        <div className="keep">
          <a href={listFilm.href} target="_blunk">
            Watch
          </a>
        </div>
      </div>
    </div>
  );
}
