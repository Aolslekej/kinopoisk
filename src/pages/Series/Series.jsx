import React from 'react'
import "./series.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import you from "../../images/you.svg";
import lastofus from "../../images/lastofus.svg";
import Ted from "../../images/Ted.svg";
import img1 from "../../images/1.svg";
import img2 from "../../images/2.svg";
import img3 from "../../images/3.svg";
import joker from "../../images/joker.svg";
import moon from "../../images/moon.svg";
import promet from "../../images/promet.svg";
import stranger from "../../images/stranger.svg";
import space from "../../images/space.svg";
import away from "../../images/away.svg";
import hours from "../../images/hours.svg";
import rampage from "../../images/rampage.svg";
import geo from "../../images/geo.svg";
import Red from "../../images/Red.svg";

const arrImg = [Ted,you,lastofus];

const latest = [moon, promet, joker,Ted, geo];

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
            Prev
          </button>
          <button onClick={handleNext} className="slider">
            Next
          </button>
        </div>
      </header>
      <main>
        <div className="container">
          <div className="items">
            <h2 className="last">Last watched</h2>
            <h2 className="all">See all</h2>
          </div>
          <Link to="/filmpage" className="lastest">
            {latest.map((image) => (
              <img src={image} alt="" />
            ))}
          </Link>
        </div>
        <footer className="home-footer">
          <div className="container">
            <div className="list-items">
              <h2 className="list">My List</h2>
              <h2 className="all">See all</h2>
            </div>
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
