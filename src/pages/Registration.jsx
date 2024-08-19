import React from "react";
import RegFormComponent from "../Components/Registration";
import Lottie from "lottie-react";
import regAnimation from "../animations/regAnimation.json.json";
import { ToastContainer, toast } from "react-toastify";
const Registration = () => {
  return (
    <>
      <ToastContainer />
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-2/4 shadow-md bg-white rounded-sm p-4 flex items-center gap-x-2 justify-between">
          <div className="w-[45%]">
            <Lottie animationData={regAnimation} loop={true} />;
          </div>
          <div className="w-[45%]">
            <RegFormComponent toast={toast} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
