import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

function Layout() {
  return (
    <div>
      <NavBar />
      <Outlet></Outlet>
      <div>footer</div>
    </div>
  );
}

export default Layout;
