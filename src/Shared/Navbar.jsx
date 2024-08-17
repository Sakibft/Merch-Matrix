import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import loginReginter from "../image/login.webp"
import { IoListOutline, IoLogOut, IoSearch } from "react-icons/io5";
import { MdManageAccounts } from "react-icons/md";
import { TbLogin } from "react-icons/tb";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  // Logout
  const handleLogout = () => {
    logOut();
  };
  return (
    <div>
      <div className="bg-black">
        <div className="container mx-auto ">
          <div className="flex md:justify-between justify-center md:p-4">
            <div>
              <Link to={"/"} className="btn btn-ghost text-xl text-white ">
                Merch Matrix
              </Link>
            </div>
            {/* serchbar */}
            <label className="input input-bordered md:flex items-center hidden  ">
              <input type="text" placeholder="Search" />
              <IoSearch className="text-xl font-bold hover:text-orange-500" />
            </label>
            {/* right site nab content */}
            <div className="md:flex hidden">
            <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className=" m-1    rounded-full p-1">
          <img className="w-10" src={loginReginter} alt="" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content bg-gray-100 rounded-lg z-[10] w-20  shadow space-y-1"
          >
            <li>
             <div className="border border-black rounded-lg">
             <MdManageAccounts className="text-center  w-full text-xl mb-[-10px]" /> 
             <button className="w-full text-center  ">Account</button>
             </div>
            </li>
            <li>
              {user ? (
                <>
                  <button onClick={handleLogout} className="border rounded-lg text-red-600 border-black flex gap-1 justify-center items-center w-full">
                    log out <IoLogOut />
                  </button>
                </>
              ) : (
                <>
                  <Link to={"/login"}>
                    
                    <button className="border rounded-lg text-red-600 border-black flex gap-1 justify-center items-center w-full">Login <TbLogin />
                    </button>
                  </Link>
                </>
              )}
            </li>
          </ul>
        </div>
            </div>
          </div>
        </div>
          {/* navbar for sm device */}
      <div className="md:hidden flex justify-center items-center  gap-x-5 ">
        {/* 3line */}
        <div className="dropdown dropdown-bottom">
          <div tabIndex={0} role="button" className=" m-1 border bg-white rounded-full p-1">
            <IoListOutline   />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content bg-gray-100 rounded-lg z-[10] w-20  shadow space-y-1"
          >
            <li>
             <div className="border border-black rounded-lg">
             <MdManageAccounts className="text-center  w-full text-xl mb-[-10px]" /> 
             <button className="w-full text-center  ">Account</button>
             </div>
            </li>
          </ul>
        </div>
{/* input */}
        <label className="input  h-6  flex items-center gap-2">
          <input type="text" placeholder="Search here..." />
          <IoSearch className="cursor-pointer hover:text-orange-400" />
        </label>
        {/* Shipping trolly */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className=" m-1    rounded-full p-1">
          <img className="w-6" src={loginReginter} alt="" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content bg-gray-100 rounded-lg z-[10] w-20  shadow space-y-1"
          >
            <li>
             <div className="border border-black rounded-lg">
             <MdManageAccounts className="text-center  w-full text-xl mb-[-10px]" /> 
             <button className="w-full text-center  ">Account</button>
             </div>
            
            </li>
            <li>
            
              {user ? (
                <>
                  <button onClick={handleLogout} className="border rounded-lg text-red-600 border-black flex gap-1 justify-center items-center w-full">
                    log out <IoLogOut />
                  </button>
                </>
              ) : (
                <>
                  <Link to={"/login"}>
                    
                    <button className="border rounded-lg text-red-600 border-black flex gap-1 justify-center items-center w-full">Login <TbLogin />
                    </button>
                  </Link>
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
      </div>
    
    </div>
  );
};

export default Navbar;
