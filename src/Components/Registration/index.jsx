import React from "react";

const RegFormComponent = () => {
  return (
    <>
      <div>
        <h1 className="font-fontBold">Registration for your new journey</h1>
        <form>
          <input
            placeholder="enter your name"
            className="w-full px-3 py-2 mb-3 border border-slate-400 rounded-md outline-none"
          />
          <input
            placeholder="enter your email"
            className="w-full px-3 py-2 mb-3 border border-slate-400 rounded-md outline-none"
          />
          <input
            placeholder="enter your password"
            className="w-full px-3 py-2 mb-3 border border-slate-400 rounded-md outline-none"
          />
          <button>Sign Up</button>
        </form>
      </div>
    </>
  );
};

export default RegFormComponent;
