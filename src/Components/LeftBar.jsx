import { useState } from "react";
import NavLinkBar from "../UI/NavLinkBar";

function LeftBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-64 bg-bar-bg p-4 min-h-screen text-info">
      <img className="w-8 my-4 mx-auto" src="./public/favicon.svg" alt="logo" />
      <button
        className="text-xl font-bold mb-6 text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Hide" : "Show"}
      </button>
      {isOpen && (
        <ul className="space-y-1">
          <li>
            <NavLinkBar to="/accounts">All accounts</NavLinkBar>
          </li>
          <li>
            <NavLinkBar to="/analytics">Analytics</NavLinkBar>
          </li>
          <li>
            <NavLinkBar to="/">Home</NavLinkBar>
          </li>
        </ul>
      )}
    </div>
  );
}

export default LeftBar;
