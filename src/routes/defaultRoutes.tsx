import type { RouteObject } from "react-router-dom";
import DefaultLayout from "../views/layouts/defaultLayout";
import NoLayout from "../views/layouts/noLayout";
import Signin from "../views/auth/sigin";
import Error404 from "../views/error/error404";
import Error500 from "../views/error/error500";
import AddProduct from "../views/add-product";
export const routerDefault: Array<RouteObject> = [
  {
    path: "/error",
    element: <NoLayout />,
    children: [
      { path: "/error/404", element: <Error404 /> },
      { path: "/error/500", element: <Error500 /> },
    ],
  },
  { path: "/login", element: <Signin /> },
  { path: "/", element: <DefaultLayout /> },
  { path: "*", element: <Error404 /> },
];


  export const addProduct = [
   
    {path: "/addproduct", element: <AddProduct />, key: 2},
  
]

export const defaultLayout = {
  path: "/",
  element: <DefaultLayout />,
  children: [...addProduct],
};
