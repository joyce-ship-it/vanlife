import "./VanDetail.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function VanDetail() {
  const [van, setVan] = useState(null);
  const params = useParams();
  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);
  console.log(van);
  return (
    <>
      {van ? (
        <div className="vanContainer">
          <div className="van-detail">
            <img src={van.imageUrl} alt="image of a Van" />
            <span>
              {van.type} <span className="price">${van.price}</span>
            </span>

            <h2>{van.name}</h2>
            <article>{van.description}</article>
            <button className="link-button">Find your next Van</button>
          </div>
        </div>
      ) : (
        <h1 className="vanContainner">Loading</h1>
      )}
    </>
  );
}
