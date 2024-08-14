import { Outlet } from "react-router-dom";

 

const Layout = () => {
    return (
        <div>
            <h1 className="font-bold text-4xl text-red-800">nab</h1>
            <button className="btn btn-primary">click me </button>
            <Outlet></Outlet>
            <h1>footer</h1>
        </div>
    );
};

export default Layout;