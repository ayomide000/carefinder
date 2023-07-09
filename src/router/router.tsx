import {
  createBrowserRouter,
} from "react-router-dom";
import LandingPage from "../components/Landing Page/LandingPage";
import SignUp from "../components/Auth/SignUp.jsx";
import Login from "../components/Auth/Login.js";
import Root from '../Root.jsx'
import FindHospital from "../components/FindHospital/FindHospital.js";

const router = createBrowserRouter([
    {
        path: "*",
        element: <Root/>
    },
    {
        path: "/",
        element: <LandingPage/>
    },
    {
      path: "/signup",
      element: <SignUp/>
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/findhospital",
      element: <FindHospital/>
    }
])

export default router