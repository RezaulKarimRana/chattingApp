import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Home from "./pages/Home";
import "react-toastify/dist/ReactToastify.css";
import LoggedInUserRoute from "./PrivateRoute/LoggedInUserRoute";
import NotLoggedInUserRoute from "./PrivateRoute/NotLoggedInUserRoute";
import Messages from "./pages/Messages";
import RootLayout from "./Components/RootLayout";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<LoggedInUserRoute />}>
          <Route element={<RootLayout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/message" element={<Messages />}></Route>
          </Route>
        </Route>
        <Route element={<NotLoggedInUserRoute />}>
          <Route path="/registration" element={<Registration />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
