import { Outlet } from "react-router-dom";
import Navbar from "./Shared/Navbar";
 import '../src/index.css' 

 

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