import React, { useState } from "react";
import { FriendsIcon } from "../../svg/Friends";
import { MessageIcon } from "../../svg/Message";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { LoggedOutUser } from "../../features/slices/LoginSlice";
import { CameraIcon } from "../../svg/Camera";
import { createPortal } from "react-dom";
import Modals from "../Modals";
import manAvatar from "../../assets/man_avatar.png";
const Navbar = () => {
  const user = useSelector((user) => user.login.loggedIn);
  const [show, setShow] = useState(false);
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
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-orange-200 overflow-hidden">
              <img src={user.photoURL || manAvatar} />
            </div>
            <div
              className="absolute bottom-0 right-0 w-5 h-5 bg-white flex rounded-full items-center justify-center cursor-pointer"
              onClick={() => setShow(true)}
            >
              <CameraIcon />
            </div>
          </div>
          <div>
            <span className="font-fontRegular text-white">
              {user.displayName}
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
            } w-10 h-10 rounded-full flex items-center justify-center`}
          >
            <FriendsIcon />
          </Link>
          <Link
            to="/message"
            className={`${
              location.pathname == "/message"
                ? "text-white bg-[#6CD0FB]"
                : "text-[#292D32] bg-white"
            } w-10 h-10 rounded-full flex items-center justify-center`}
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
        {show && createPortal(<Modals setShow={setShow} />, document.body)}
      </div>
    </>
  );
};

export default Navbar;
