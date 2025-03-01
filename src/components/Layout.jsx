import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

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
