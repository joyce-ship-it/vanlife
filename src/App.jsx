import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/" className="logo">
          VanLife
        </Link>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="about">About</Link>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="about" element={<About></About>}></Route>
      </Routes>
      <footer>#VANLIFE 2025</footer>
    </BrowserRouter>
  );
}
export default App;
