import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <div className="relative h-screen w-full">
        <div className="h-[500px] bg-[#212121] w-full"></div>
        <div className="w-3/4 pb-5 h-[800px] bg-white rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-md">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default RootLayout;
