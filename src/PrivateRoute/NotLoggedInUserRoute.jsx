import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Home from "../pages/Home";

export default function NotLoggedInUserRoute() {
  const user = useSelector((user) => user.login.loggedIn);
  return user ? <Home /> : <Outlet />;
}
