import { NavLink } from "react-router-dom";

function NavLinkBar({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [
          "transition-colors duration-150 ease-out px-3 py-2 my-3 block rounded-lg",
          isActive
            ? " text-indigo-400 bg-indigo-950"
            : "  text-info hover:bg-gray-900",
        ].join(" ")
      }
    >
      {children}
    </NavLink>
  );
}

export default NavLinkBar;
