import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../Layouts/BaseLayout";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu";
import OurShop from "../Pages/OurShop";
import ErrorPage from "../Pages/ErrorPage";

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
        element: <Menu />,
      },
      {
        path: "/ourShop/:category",
        element: <OurShop />,
      },
    ],
  },
]);
