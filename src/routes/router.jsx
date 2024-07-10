import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Signup from "../pages/auth/Signup";
import Login from "../pages/auth/Login";
import Questions from "../pages/Questions";
import AboutUs from "../pages/AboutUs";
import ForgotPassword from "../pages/ForgotPassword";
import UserDashboard from "../pages/UserDashboard";
import EditProfile from "../pages/EditProfile";
import ChangePassword from "../pages/ChangePassword";
import LandingPagesWrapper from "../components/layouts/LandingPagesWrapper";
import ProtectedRoute from "./ProtectedRoute";
import Progress from "../pages/Progress";
import ViewCategory from "../pages/landing/ViewCategory";
import ViewQuestion from "../pages/landing/ViewQuestion";
import QuizComponent from "../pages/dashboard/QuizComponent";
import ResultsComponent from "../pages/dashboard/ResultsComponent";
import CategoryList from "../pages/CategoryList";

const router = createBrowserRouter([
  {
    element: <LandingPagesWrapper />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/categories", element: <CategoryList /> },
      { path: "/category/view/:categoryId", element: <ViewCategory /> },
      {path: "/question/view/:questionId", element: <ViewQuestion />},
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
      { path: "/questions", element: <Questions /> },
      {path: "/quiz/results/", element: <ResultsComponent />},
      { path: "/quiz/:questionId", element: <QuizComponent /> },
      { path: "/progress", element: <Progress /> },
    ],
  },
  { path: "*", element: <div>404</div> },
]);

export default router;
