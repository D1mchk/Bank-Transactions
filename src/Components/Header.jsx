import { NavLink } from "react-router-dom";

function Header() {
  return (
    <ul>
      <li>
        <NavLink to="accounts">All accounts</NavLink>
      </li>
      <li>
        <NavLink to="analytics">Analytics</NavLink>
      </li>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
    </ul>
  );
}

export default Header;
