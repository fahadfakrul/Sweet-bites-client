import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home.jsx";
import Menu from "../Pages/Menu/Menu/Menu.jsx";
import Order from "../Pages/Order/Order/Order.jsx";
import Login from "../Pages/Login/Login.jsx";
import SignUp from "../Pages/SignUp/SignUp.jsx";
import Dashboard from "../Layout/Dashboard.jsx";
import Cart from "../Pages/Dashboard/Cart/Cart.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers.jsx";
import AddItems from "../Pages/Dashboard/AddItems/AddItems.jsx";
import AdminRoute from "./AdminRoute.jsx";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems.jsx";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem.jsx";
import Payment from "../Pages/Dashboard/Payment/Payment.jsx";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
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
            path: "/order/:category",
            element: <Order></Order>,
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/signup",
            element: <SignUp></SignUp>
        }
      ],
    },
    {
      path: "dashboard",
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        // user route
        {
            path: "cart",
            element: <Cart></Cart>,
        },
        {
            path: "payment",
            element: <Payment></Payment>,
        },
        // admin routes
        {
            path: "addItems",
            element: <AdminRoute><AddItems></AddItems></AdminRoute>
        },
        {
            path: "manageItems",
            element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
        },
        {
            path: "updateItem/:id",
            element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
        },
        {
            path: "users",
            element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        }
      ],
    },
  ]);

