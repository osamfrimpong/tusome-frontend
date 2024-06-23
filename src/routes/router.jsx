import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Signup from "../pages/auth/Signup";
import Login from "../pages/auth/Login";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/signup", element: <Signup /> },
  {path: "/login", element: <Login />},
  { path: "*", element: <div>404</div> },
]);

export default router;
