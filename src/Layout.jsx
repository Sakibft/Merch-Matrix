import { Outlet } from "react-router-dom";
import Navbar from "./Shared/Navbar";
import Register from "./Register";
 

 

const Layout = () => {
    return (
        <div>
          
          <Navbar></Navbar>
          
            <div>
            <Outlet></Outlet>
            </div>
         </div>
    );
};

export default Layout;