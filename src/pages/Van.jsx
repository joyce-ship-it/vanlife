import "./Van.css";
import { Link } from "react-router-dom";
export default function Van(props) {
  return (
    <Link
      to={`/vans/${props.id}`}
      aria-label={`View details for ${props.name} priced at $${props.price} per day`}
    >
      <div className="van">
        <img src={props.imgURL} alt="image of a van"></img>
        <div className="details">
          <h3>{props.name}</h3>
          <span>${props.price}</span>
        </div>
        {props.type && <span className="type">{props.type}</span>}
      </div>
    </Link>
  );
}
