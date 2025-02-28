import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <div>header</div>
      <Outlet></Outlet>
      <div>footer</div>
    </div>
  );
}

export default Layout;
