import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import homeFilms from "../../homeFilms.json"
import cross from "../../images/cross.png";
import "../FilmPage/filmpage.css";

export default function HomeFilm() {
  const { id } = useParams();
  const homeFilm = homeFilms.films.find((film) => film.id === parseInt(id));
  return (
    <div className="page">
    <div className="container">
      <Link to="/">
        <img src={cross} alt="" className="back"/>
      </Link>
      <h2 className="filmName">{homeFilm.title}</h2>
      <div className="items">
        <h3 className="age">{homeFilm.age}</h3>
        <h3 className="author">{homeFilm.director}</h3>
        <h3 className="netflix">Netflix</h3>
      </div>
      <a href={homeFilm.href} target="_blunk">Watch</a>
    </div>
  </div>
  );
}
