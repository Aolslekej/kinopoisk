import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";

import { Home, Search, Film, Series, Login, HomeFilm, ListFilm} from "./pages";
import searchImg from "./images/search.png";
import homeImg from "./images/home.png";

import "./App.css";

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/film" element={<Film />} />
          <Route path="/series" element={<Series />} />
          <Route path="/films/:id" element={<HomeFilm />} />
          <Route path="/lists/:id" element={<ListFilm />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <footer className="pages">
        <nav>
          <NavLink to="/search" className="for-all">
            <img src={searchImg} alt="" className="search marg" />
          </NavLink>
          <NavLink to="/" className="for-all">
            <img src={homeImg} alt="" className="search marg" />
          </NavLink>
        </nav>
      </footer>
    </Router>
  );
}

export default App;
