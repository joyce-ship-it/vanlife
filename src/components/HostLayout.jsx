import { NavLink, Outlet } from "react-router-dom";

const style = {
  width: "100%",
  display: "flex",
  justifyContent: "space-evenly",
  padding: ".5rem",
  textDecoration: "none",
  backgroundColor: "#1C1917",
  color: "#FCA5A5",
  fontSize: "1.2rem",
};

export default function HostLayout() {
  return (
    <>
      <nav className="hostLayout" style={style}>
        <NavLink
          to="."
          end
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="income"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Income
        </NavLink>
        <NavLink
          to="vans"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Vans
        </NavLink>
        <NavLink
          to="reviews"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet></Outlet>
    </>
  );
}
