import { NavLink } from "react-router-dom";

function NavLinkBar({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [
          "transition-colors duration-150 ease-out border-white",
          isActive ? " text-white" : "block rounded hover: text-info",
        ].join(" ")
      }
    >
      {children}
    </NavLink>
  );
}

export default NavLinkBar;
