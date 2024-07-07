import { createBrowserRouter, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Signup from "../pages/auth/Signup";
import Login from "../pages/auth/Login";
import Quiz from "../pages/Quiz";
import Questions from "../pages/Questions";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import ForgotPassword from "../pages/ForgotPassword";
import UserDashboard from "../pages/UserDashboard";
import EditProfile from "../pages/EditProfile";
import ChangePassword from "../pages/ChangePassword";
import LandingPagesWrapper from "../components/layouts/LandingPagesWrapper";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    element: <LandingPagesWrapper />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/quiz", element: <Quiz /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
  { path: "/signup", element: <Signup /> },
  { path: "/login", element: <Login /> },
  { path: "/forgot", element: <ForgotPassword /> },
  {
    element: <ProtectedRoute />,
    children: [
      { path: "/dashboard", element: <UserDashboard /> },
      { path: "/edit-profile", element: <EditProfile /> },
      { path: "/change-password", element: <ChangePassword /> },
      { path: "/quiz", element: <Quiz /> },
      { path: "/questions", element: <Questions /> },
    ],
  },
  { path: "*", element: <div>404</div> },
]);

export default router;
