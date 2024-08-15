import { Outlet } from "react-router-dom";
import Navbar from "./Shared/Navbar";

 

const Layout = () => {
    return (
        <div>
          <div className="container mx-auto">
          <Navbar></Navbar>
          </div>
            <Outlet></Outlet>
            <h1>footer</h1>
        </div>
    );
};

export default Layout;