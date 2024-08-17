import React from "react";
import RegFormComponent from "../Components/Registration";

const Registration = () => {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-2/4 shadow-md bg-white rounded-sm p-4 flex items-center gap-x-2 justify-between">
          <div className="w-[45%]">animation/image</div>
          <div className="w-[45%]">
            <RegFormComponent />
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
