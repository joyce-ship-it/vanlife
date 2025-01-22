import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
const hostVansListStyle = {
  width: "80%",
  maxWidth: "600px",
  height: "40%",
  display: "flex",
  justifyContent: "center",
  padding: "1rem",
  backgroundColor: "#FDE68A",
  borderRadius: ".5rem",
};
const content = {
  display: "flex",
  flexDirection: "column",
  flex: "2",
  justifyContent: "center",
  color: "red",
};
export default function HostVans() {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);
  console.log(vans);
  const hostVansListEls = vans.map((van) => {
    return (
      <NavLink key={van.id} to={`/host/vans/${van.id}`}>
        <div style={hostVansListStyle}>
          <img
            src={van.imageUrl}
            alt="image  of van"
            style={{ width: "50%", height: "50%", objectFit: "cover" }}
          />
          <div style={content}>
            <h2>{van.name}</h2>
            <p>${van.price}/day</p>
          </div>
        </div>
      </NavLink>
    );
  });
  return (
    <>
      <h1>Host Vans List Page</h1>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          marginTop: "1rem",
        }}
      >
        {vans.length > 0 && hostVansListEls}
      </div>
    </>
  );
}
