import * as Yup from "yup";

export const signUp = Yup.object({
  fullName: Yup.string().min(3).required("Full name is required"),
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().min(8).required("Password should be 8 characters"),
});
