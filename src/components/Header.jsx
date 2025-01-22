import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <NavLink to="/">VanLife</NavLink>
      <div className="links">
        <NavLink
          to="/host"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Host
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About
        </NavLink>
        <NavLink
          to="/vans"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Vans
        </NavLink>
      </div>
    </header>
  );
}
