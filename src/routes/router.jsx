import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Signup from "../pages/auth/Signup";
import Login from "../pages/auth/Login";
import Quiz from "../pages/Quiz";
import LandingPagesWrapper from "../components/layouts/LandingPagesWrapper";


const router = createBrowserRouter([
  {
    element: <LandingPagesWrapper />,
    children: [{ path: "/", element: <HomePage /> }],
  },
  { path: "/signup", element: <Signup /> },
  { path: "/login", element: <Login /> },
  { path: "/quiz", element: <Quiz /> },
  { path: "*", element: <div>404</div> },
]);

export default router;
