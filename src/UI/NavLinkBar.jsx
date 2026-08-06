import { NavLink } from "react-router-dom";

function NavLinkBar({ to, children }) {
  return (
    <NavLink to={to} className="block p-2 rounded hover: text-info">
      {children}
    </NavLink>
  );
}

export default NavLinkBar;
