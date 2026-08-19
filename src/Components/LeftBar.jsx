import NavLinkBar from "../UI/NavLinkBar";
import { NavLink } from "react-router-dom";
import CardInfo from "./CardInfo";
import { useSelector } from "react-redux";

function LeftBar() {
  const currentUser = useSelector((state) => state.users.user);

  return (
    <div className="w-64 bg-bar-bg p-4 min-h-screen overflow-hidden">
      <NavLink to="/">
        <img className="w-8 my-4 mb-6 mx-auto" src="./favicon.svg" alt="logo" />
      </NavLink>

      <div className="flex flex-col justify-between">
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

        <CardInfo>
          <div className="text-white font-semibold text-md -mt-2">
            {currentUser.name}
          </div>
          <div className="text-xs tracking-wider text-neutral-500">
            {currentUser.plan}
          </div>
        </CardInfo>
      </div>
    </div>
  );
}

export default LeftBar;
