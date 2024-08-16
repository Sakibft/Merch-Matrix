import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  // Logout
  const handleLogout = () => {
    logOut();
  };
  return (
    <div className="container mx-auto ">
      <div className="flex justify-between p-4">
        <div>
          <Link to={"/"} className="btn btn-ghost text-xl text-white">
            MerchMatrix
          </Link>
        </div>
        {/* serchbar */}
        <label className="input input-bordered flex items-center ">
          <input type="text" placeholder="Search" />
          <IoSearch className="text-xl font-bold hover:text-orange-500" />

        </label>
        <div className="flex-none">
          {user ? (
            <>
              <button onClick={handleLogout} className="btn btn-">
                logOut
              </button>
            </>
          ) : (
            <>
              <Link to={"/login"}>
                {" "}
                <button className="btn">Login</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
