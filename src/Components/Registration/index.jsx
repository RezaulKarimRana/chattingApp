import { useFormik } from "formik";
import React, { useState } from "react";
import { signUp } from "../../Validation/Validation";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { BeatLoader } from "react-spinners";
const RegFormComponent = ({ toast }) => {
  const [loading, setLoading] = useState(false);
  const auth = getAuth();
  const initialValues = {
    fullName: "",
    email: "",
    password: "",
  };
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: () => {
      createNewUser();
    },
    validationSchema: signUp,
  });
  const createNewUser = () => {
    setLoading(true);
    createUserWithEmailAndPassword(
      auth,
      formik.values.email,
      formik.values.password
    )
      .then(() => {
        setLoading(false);
        setLoading(false);
        toast.success("Successfully Registered", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((error) => {
        setLoading(false);
        toast.error("An error occured during registration", {
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
        <h1 className="font-fontBold text-xl mb-4">
          Registration for your new journey
        </h1>
        <form onSubmit={formik.handleSubmit}>
          <input
            name="fullName"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            type="text"
            placeholder="enter your name"
            className="w-full px-3 py-2 mb-3 border border-slate-400 rounded-md outline-none"
          />
          {formik.errors.fullName && formik.touched.fullName && (
            <p className="font-fontRegular text-red-500 text-sm mb-5">
              {formik.errors.fullName}
            </p>
          )}
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
            {loading ? <BeatLoader /> : "Sign Up"}
          </button>
        </form>
        <p className="font-fontRegular text-base text-gray-400 mt-5 text-center">
          Already Have an account? Sign In
        </p>
      </div>
    </>
  );
};

export default RegFormComponent;
