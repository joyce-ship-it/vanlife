import { useEffect, useState } from "react";
import "./Vans.css";
import Van from "./Van";
export default function Vans() {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => {
        const temp = data.vans;
        setVans(temp);
      });
  }, []);

  return (
    <div className="vans">
      <h2>Explore our van options</h2>
      <div className="options">
        <button className="option">Simple</button>
        <button className="option">Luxury</button>
        <button className="option">Rugged</button>
        <button className="clear">Clear Items</button>
      </div>
      {vans &&
        vans.map((van) => {
          return (
            <Van
              key={van.id}
              id={van.id}
              imgURL={van.imageUrl}
              description={van.description}
              name={van.name}
              type={van.type}
              price={van.price}
            ></Van>
          );
        })}
    </div>
  );
}
