import { useEffect, useState } from "react";
import { useParams, NavLink, Link, Outlet } from "react-router-dom";

export default function HostVanDetails() {
  const [currVan, setCurrVan] = useState(null);
  const params = useParams();
  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setCurrVan(data.vans.at(0)));
  }, [params.id]);
  console.log(currVan);
  if (currVan) {
    console.log(currVan.name);
    return (
      <div className="hostdetailscontainer">
        <Link
          style={{
            color: "#FB7185",
            backgroundColor: "#1C1917",

            display: "flex",
            justifyContent: "flex-start",
          }}
          to=".."
          relative="path"
        >
          Go back to Host Vans List
        </Link>
        <div className="hostdetails">
          <img src={currVan.imageUrl} alt="image of a van" />
          <div className="info">
            <span className="type">{currVan.type}</span>
            <h2>{currVan.name}</h2>
            <span>{currVan.price}$/day</span>
          </div>
        </div>
        <nav>
          <NavLink to="." end>
            Details
          </NavLink>
          <NavLink to="pricing">Pricing</NavLink>
          <NavLink to="photos">Photos</NavLink>
        </nav>
        <Outlet context={{ currVan }}></Outlet>
      </div>
    );
  } else {
    return <h1>Loading</h1>;
  }
}
