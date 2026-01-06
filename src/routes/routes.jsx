import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";

import Profile from "../pages/Profile";
import ToyDetails from "../pages/ToyDetails";
import LoadingSpinner from "../components/LoadingSpiner";
import ShowAllToy from "../pages/ShowAllToy";
import LoginPages from "../pages/LoginPages";

import ErrorPage from "../pages/ErrorPage";
import RegisterPage from "../pages/RegisterPage";
import About from "../pages/About";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";

export const router = createBrowserRouter([
  {
    path: "/",

    element: <MainLayout></MainLayout>,
    hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/toys.json"),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/toy-details/:id",
        element: (
          <PrivateRoute>
            <ToyDetails></ToyDetails>,
          </PrivateRoute>
        ),
        loader: () => fetch("/toys.json"),
      },
      {
        path: "/show-all-toy",
        element: (
          <PrivateRoute>
            {" "}
            <ShowAllToy></ShowAllToy>
          </PrivateRoute>
        ),
        loader: () => fetch("/toys.json"),
       
      },
      {
        path: "/login-pages",
        element: <LoginPages></LoginPages>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/register-page",
        element: <RegisterPage></RegisterPage>,
      },
      {
        path: "/forgot-password-page",
        element: <ForgotPasswordPage></ForgotPasswordPage>,
      },
    ],
  },

  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
