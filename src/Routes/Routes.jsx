import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../Layouts/BaseLayout";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu";
import OurShop from "../Pages/OurShop";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout></BaseLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/ourShop",
        element: <OurShop></OurShop>,
      },
    ],
  },
]);
