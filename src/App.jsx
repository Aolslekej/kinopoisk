import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";

import { Home, Search } from "./pages";

import "./App.css";

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </main>
      <footer className="pages">
        <nav>
          <NavLink to="/" className="for-all">Home</NavLink>
          <NavLink to="/search" className="for-all">Search</NavLink>
        </nav>
      </footer>
    </Router>
  );
}

export default App;
