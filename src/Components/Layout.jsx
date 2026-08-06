import { Outlet } from "react-router-dom";
import LeftBar from "./LeftBar";

function Layout() {
  return (
    <div className="flex">
      <LeftBar />
      <main className="flex-1 p-4 bg-main-bg">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
