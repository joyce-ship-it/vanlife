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
        <Link to="vans" style={{ minWidth: "80%" }}>
          <button>Find your Van</button>
        </Link>
      </div>
    </div>
  );
}
