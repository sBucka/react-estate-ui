import "./layout.scss";
import Navbar from "../../components/navbar/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="layout">
      <div class="navbar">
        <Navbar></Navbar>
      </div>
      <div class="content">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default Layout;
