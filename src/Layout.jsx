import { Outlet } from "react-router-dom";
import Navbar from "./Shared/Navbar";
import Register from "./Register";
 

 

const Layout = () => {
    return (
        <div>
          <div className="container mx-auto">
          <Navbar></Navbar>
          </div>
            <Outlet></Outlet>
         </div>
    );
};

export default Layout;