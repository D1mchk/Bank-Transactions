import { useState } from "react";
import NavLinkBar from "../UI/NavLinkBar";

function LeftBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-64 bg-bar-bg p-4 min-h-screen text-info">
      <NavLinkBar to="/">
        <img className="w-8 my-4 mx-auto" src="./favicon.svg" alt="logo" />
      </NavLinkBar>

      <button
        className="text-xl font-bold mb-6 text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✕" : "☰"}
      </button>
      {isOpen && (
        <ul className="space-y-1">
          <li>
            <NavLinkBar to="/">Accounts</NavLinkBar>
          </li>
          <li>
            <NavLinkBar to="/accounts">Transactions</NavLinkBar>
          </li>
          <li>
            <NavLinkBar to="/analytics">Analytics</NavLinkBar>
          </li>
        </ul>
      )}
    </div>
  );
}

export default LeftBar;
