import { Outlet } from "react-router-dom";
import LeftBar from "./LeftBar";

function Layout() {
  return (
    <>
      <LeftBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
