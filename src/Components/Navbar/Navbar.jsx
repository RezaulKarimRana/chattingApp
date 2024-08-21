import React from "react";
import { FriendsIcon } from "../../svg/Friends";
import { MessageIcon } from "../../svg/Message";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { LoggedOutUser } from "../../features/slices/LoginSlice";

const Navbar = () => {
  const location = useLocation();
  const auth = getAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
        localStorage.removeItem("user");
        dispatch(LoggedOutUser());
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <>
      <div className="flex justify-between items-center py-3 bg-slate-900 px-5">
        <div className="flex items-center gap-x-2">
          <div className="w-14 h-14 rounded-full bg-orange-200 overflow-hidden"></div>
          <div>
            <span className="font-fontRegular text-white">
              Md. Rezaul Karim
            </span>
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <Link
            to="/"
            className={`${
              location.pathname == "/"
                ? "text-white bg-[#6CD0FB]"
                : "text-[#292D32] bg-white"
            } w-10 h-10 rounded-full bg-white flex items-center justify-center`}
          >
            <FriendsIcon />
          </Link>
          <Link
            to="/message"
            className={`${
              location.pathname == "/message"
                ? "text-white bg-[#6CD0FB]"
                : "text-[#292D32] bg-white"
            } w-10 h-10 rounded-full bg-white flex items-center justify-center`}
          >
            <MessageIcon />
          </Link>
        </div>
        <div>
          <button
            className="bg-[#6CD0FB] px-4 py-2 rounded-md font-fontBold text-sm text-white"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
