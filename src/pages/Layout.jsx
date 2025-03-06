import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
function Layout() {
  return (
    <div className="layout">
      <NavBar />
      <Outlet></Outlet>
    </div>
  );
}

export default Layout;
