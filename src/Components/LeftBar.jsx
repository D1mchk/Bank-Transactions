import { useState } from "react";
import { NavLink } from "react-router-dom";

function LeftBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Hide" : "Show"}
      </button>
      {isOpen && (
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
      )}
    </>
  );
}

export default LeftBar;
