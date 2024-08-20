import { useFormik } from "formik";
import React, { useState } from "react";
import { signIn } from "../../Validation/Validation";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { BeatLoader } from "react-spinners";
import { useDispatch } from "react-redux";
import { LoggedInUser } from "../../features/slices/LoginSlice";
import { Link, useNavigate } from "react-router-dom";

const LoginFormComponent = ({ toast }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();
  const initialValues = {
    email: "",
    password: "",
  };
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: () => {
      signInUser();
    },
    validationSchema: signIn,
  });
  const signInUser = () => {
    setLoading(true);
    signInWithEmailAndPassword(
      auth,
      formik.values.email,
      formik.values.password
    )
      .then(({ user }) => {
        setLoading(false);
        dispatch(LoggedInUser(user.uid));
        localStorage.setItem("user", JSON.stringify(user.uid));
        toast.success("Successfully Loggedin", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setLoading(false);
        toast.error(errorMessage, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };
  return (
    <>
      <div>
        <h1 className="font-fontBold text-xl mb-4">Log in to your account</h1>
        <form onSubmit={formik.handleSubmit}>
          <input
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            type="email"
            placeholder="enter your email"
            className="w-full px-3 py-2 mb-3 border border-slate-400 rounded-md outline-none"
          />
          {formik.errors.email && formik.touched.email && (
            <p className="font-fontRegular text-red-500 text-sm mb-5">
              {formik.errors.email}
            </p>
          )}
          <input
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            type="password"
            placeholder="enter your password"
            className="w-full px-3 py-2 mb-3 border border-slate-400 rounded-md outline-none"
          />
          {formik.errors.password && formik.touched.password && (
            <p className="font-fontRegular text-red-500 text-sm mb-5">
              {formik.errors.password}
            </p>
          )}
          <button
            disabled={loading}
            className="bg-slate-900 text-white font-fontBold text-base rounded-md w-full py-3"
          >
            {loading ? <BeatLoader color="#fff" size={5} /> : "Sign In"}
          </button>
        </form>
        <p className="font-fontRegular text-base text-gray-400 mt-5 text-center">
          Don't Have an account?{" "}
          <Link to="/registration" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </>
  );
};

export default LoginFormComponent;
