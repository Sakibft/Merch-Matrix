import { Outlet } from "react-router-dom";
import Navbar from "./Shared/Navbar";
 import '../src/index.css' 
import Footer from "./Footer";

 

const Layout = () => {
    return (
        <div>
          
          <Navbar></Navbar>
          
            <div>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
         </div>
    );
};

export default Layout;