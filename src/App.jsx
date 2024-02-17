import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";

import { Home, Search, Film, Series, FilmPage, Login } from "./pages";
import searchImg from "./images/search.png";
import homeImg from "./images/home.png";
import user from "./images/user.png";

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
          <Route path="/filmpage" element={<FilmPage />} />
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
          <NavLink to="/login" className="for-all">
            <img src={user} alt="" className="search" />
          </NavLink>
        </nav>
      </footer>
    </Router>
  );
}

export default App;
