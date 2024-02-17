import React from "react";
import "../Home/home.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import arrow from "../../images/arrow.png";
import moon from "../../images/moon.png";
import promet from "../../images/promet.png";
import joker from "../../images/joker.png";
import hours from "../../images/hours.png";
import space from "../../images/space.png";
import away from "../../images/away.png";
import Ted from "../../images/Ted.png";
import geo from "../../images/geo.png";
import rampage from "../../images/rampage.png";
import Red from "../../images/Red.png";
import you from "../../images/you.png";
import lastofus from "../../images/lastofus.png";

const arrImg = [Ted, you, lastofus];

const latest = [moon, promet, joker, Ted, geo];

const myList = [hours, space, away, rampage, Red];

export default function Series() {
  const [count, setCount] = useState(0);

  function handlePrev() {
    if (count == 0) {
      setCount(arrImg.length - 1);
      return;
    }
    setCount((prevCount) => prevCount - 1);
  }

  function newMovie() {
    setMovie([moon, promet, rampage]);
  }

  function handleNext() {
    if (count === arrImg.length - 1) {
      setCount(0);
      return;
    }
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div className="kinopoisk">
      <header>
        <div className="container">
          <h1 className="anime">Movielab</h1>
          <Link to="/film">
            <button className="genre special">Movies</button>
          </Link>
          <Link to="/series">
            <button className="genre special">Series</button>
          </Link>
          <Link to="/">
            <button className="genre">Anime</button>
          </Link>
          <div className="item">
            <Link to="/filmpage">
              <img src={arrImg[count]} alt="" />
            </Link>
          </div>
          <button onClick={handlePrev} className="slider prev">
            <img src={arrow} alt="" className="reverse arrow" />
          </button>
          <button onClick={handleNext} className="slider">
            <img src={arrow} alt="" className="arrow" />
          </button>
        </div>
      </header>
      <main>
        <div className="container">
          <h2 className="last">Last watched</h2>
          <Link to="/filmpage" className="lastest">
            {latest.map((image) => (
              <img src={image} alt="" />
            ))}
          </Link>
        </div>
        <footer className="home-footer">
          <div className="container">
            <h2 className="list">My List</h2>
            <Link to="/filmpage" className="my-list">
              {myList.map((image) => (
                <img src={image} alt="" />
              ))}
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
