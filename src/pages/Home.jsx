import { Link } from "react-router-dom";
import "./Home.css";
export default function Home() {
  return (
    <div className="home">
      <div className="text">
        <h1>This is the Home page!</h1>
        <p>
          Go to <Link to="about">About</Link>
        </p>
        <button>Find your Van</button>
      </div>
    </div>
  );
}
