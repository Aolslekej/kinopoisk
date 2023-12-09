import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import { useState } from "react";
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


const arrImg = [img1, img2, img3];

export default function Home() {
  const [count, setCount] = useState(0);

  function handlePrev() {
    if (count == 0) {
      setCount(arrImg.length - 1);
      return;
    }
    setCount((prevCount) => prevCount - 1);
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
          <Link to="/search">
            <button className="genre special">Movies</button>
          </Link>
          <Link>
            <button className="genre special">Tv Shows</button>
          </Link>
          <Link to="/">
            <button className="genre">Anime</button>
          </Link>
          <div className="item">
            <img src={arrImg[count]} alt="" />
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
          <div className="lastest">
            <img src={moon} alt="" />
            <img src={promet} alt="" />
            <img src={joker} alt="" />
            <img src={stranger} alt="" />
            <img src={geo} alt="" />
          </div>
        </div>
        <footer>
          <div className="container">
            <div className="list-items">
              <h2 className="list">My List</h2>
              <h2 className="all">See all</h2>
            </div>
            <div className="my-list">
              <img src={hours} alt="" />
              <img src={space} alt="" />
              <img src={away} alt="" />
              <img src={rampage} alt="" />
              <img src={Red} alt="" />
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
