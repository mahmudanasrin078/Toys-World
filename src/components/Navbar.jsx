//import React, { use } from "react";
import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { HashLoader } from "react-spinners";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const { user, logOutUserFunc, setUser, loading } = useContext(AuthContext);
  // console.log(user);

  const handleLogout = () => {
    logOutUserFunc()
      .then(() => {
        toast.success("Logout successful");
        setUser(null);
      })
      .catch((e) => {
        console.log(e);
        toast.error(e.message);
      });
  };

  return (
    <div>
      <div className="  md:flex justify-center md:justify-between items-center w-11/12 mx-auto my-5 ">
        <div className=" text-2xl flex md:justify-between items-center gap-1 my-3 md:my-0">
          <img className="w-[41px] h-[41px]" src={Logo} alt="" />
          <h2 className="font-bold">Toys World</h2>
        </div>
        <div className="nav flex gap-5 text-accent my-3 md:my-0">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "active-link" : "inactive-link"
            }
          >
            {" "}
            Home
          </NavLink>

          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              isActive ? "active-link" : "inactive-link"
            }
          >
            {" "}
            About
          </NavLink>

          {/* protected profile */}

          {user && (
            <NavLink
              to={"/profile"}
              className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }
            >
              {" "}
              Profile
            </NavLink>
          )}
          {user && (
            <NavLink
              to={"/show-all-toy"}
              className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }
            >
              {" "}
              All Toys
            </NavLink>
          )}
        </div>

        {loading ? (
          <HashLoader />
        ) : user ? (
          <div className="text-center space-y-3 p-3">
            {/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
            {/* For TSX uncomment the commented types below */}
            <button
              className="btn"
              popoverTarget="popover-1"
              style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}
            >
              <img
                className="h-[30px] w-[30px] rounded-full mx-auto  "
                src={
                  user?.photoURL ||
                  "https://img.icons8.com/?size=96&id=8vsjJt13MQHk&format=png"
                }
                alt="user"
                title={user?.displayName ? user.displayName : ""}
              />

              <button
                onClick={handleLogout}
                className="btn bg-primary text-white w-full"
              >
                Logout
              </button>
            </button>

            <div
              className="dropdown menu w-52 rounded-box bg-base-100  shadow-sm"
              popover="auto"
              id="popover-1"
              style={
                { positionAnchor: "--anchor-1" } /* as React.CSSProperties */
              }
            >
              <h2 className="text-xl font-semibold ">{user?.displayName}</h2>
              <p className="text-xs font-semibold text-black">{user?.email}</p>
              <button
                onClick={handleLogout}
                className="btn bg-primary text-white w-full"
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <Link to="/login-pages" className="btn btn-primary px-10">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
