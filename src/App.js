import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from "./Pages/Home";
import ErrorPage from "./Pages/ErrorPage"
import CV from "./Pages/cv/CV";
import Restaurant from "./Pages/restaurant/Restaurant";

function getCurrentYear() {
  return new Date().getFullYear();
}

function App() {
  return (
    <Router className="app">
      <nav>
        <Link className="link" to="/"> Home </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/restaurant" element={<Restaurant />} />
        {/*
        <Route path="/musicplayer" element={<Home />} />
        <Route path="/nothing" element={<Nothing />} />
        */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <footer>
        <p>&#169;Copyright JB Web Design {getCurrentYear()}</p>
      </footer>
    </Router>
  );
}

export default App;
