import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../Layouts/BaseLayout";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu";
import OurShop from "../Pages/OurShop";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Layouts/Dashboard";
import Cart from "../Pages/Dashboard/Cart";
import MyProfile from "../Pages/Dashboard/MyProfile";
import AllUsers from "../Pages/Dashboard/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/Dashboard/ManageItems";
import UpdateItem from "../Pages/Dashboard/UpdateItem";
import Payment from "../Pages/Dashboard/Payment";
// const fetchMenuInfo = async (params) => {
//   const response = await fetch(`http://localhost:5000/menu/${params.id}`);
//   const data = await response.json();
//   return data;
//   // console.log(data);
//   // console.log(params);
// };

export const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    errorElement: <ErrorPage />,
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
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard />
      </PrivateRoutes>
    ),
    children: [
      //normalUserRoute
      {
        path: "/dashboard",
        element: (
          <PrivateRoutes>
            <MyProfile />
          </PrivateRoutes>
        ),
      },
      {
        path: "/dashboard/cart",
        element: (
          <PrivateRoutes>
            <Cart />
          </PrivateRoutes>
        ),
      },
      {
        path: "/dashboard/payment",
        element: (
          <PrivateRoutes>
            <Payment />
          </PrivateRoutes>
        ),
      },
      //Admin only Route
      {
        path: "/dashboard/all-users",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addItems",
        element: (
          <AdminRoute>
            <AddItems />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manageItems",
        element: (
          <AdminRoute>
            <ManageItems />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/updateItem/:id",
        element: (
          <AdminRoute>
            <UpdateItem />
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/menu/${params.id}`),
      },
    ],
  },
]);
