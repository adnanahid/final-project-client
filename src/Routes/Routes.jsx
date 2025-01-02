import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../Layouts/BaseLayout";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu";
import OurShop from "../Pages/OurShop";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: (
          <PrivateRoutes>
            <Menu />
          </PrivateRoutes>
        ),
      },
      {
        path: "/ourShop/:category",
        element: (
          <PrivateRoutes>
            <OurShop />
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/ourShop/:category",
        element: <OurShop />,
      },
    ],
  },
]);
