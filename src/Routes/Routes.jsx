import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home.jsx";
import Menu from "../Pages/Menu/Menu/Menu.jsx";
import Order from "../Pages/Order/Order/Order.jsx";


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
        }
      ],
    },
  ]);

