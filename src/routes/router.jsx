import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Signup from "../pages/auth/Signup";
import Login from "../pages/auth/Login";
import Quiz from "../pages/Quiz";
import Questions from "../pages/Questions";
import AboutUs from "../pages/AboutUs";
import Faq from "../pages/Faq";
import Contact from "../pages/Contact";
import Terms from "../pages/Terms";
import Privacy from "../pages/Privacy";
import ForgotPassword from "../pages/ForgotPassword";
import LandingPagesWrapper from "../components/layouts/LandingPagesWrapper";


const router = createBrowserRouter([
  {
    element: <LandingPagesWrapper />,
    children: [{ path: "/", element: <HomePage /> },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/quiz", element: <Quiz /> },
      { path: "/faq", element: <Faq /> },
      { path: "/terms", element: <Terms /> },
      { path: "/privacy", element: <Privacy /> },
      { path: "/contact", element: <Contact /> },

    ],
  },
  { path: "/signup", element: <Signup /> },
  { path: "/login", element: <Login /> },
  { path: "/quiz", element: <Quiz /> },
  { path: "/questions", element: <Questions /> },
  { path: "/about-us", element: <AboutUs /> },
  { path: "/faq", element: <Faq /> },
  { path: "/contact", element: <Contact /> },
  { path: "/terms", element: <Terms /> },
  { path: "/privacy", element: <Privacy /> },
  { path: "/forgot", element: <ForgotPassword /> },



  { path: "*", element: <div>404</div> },
]);

export default router;
