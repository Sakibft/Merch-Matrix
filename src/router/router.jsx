import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Login from "../Login";
import Register from "../Register";
import Home from "../Home";
import Category from "../Category";
import Search from "../Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <h1>Error found</h1>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path:'/category/:category',
        element:<Category></Category>
      },
      {
        path:'/search/:search',
        element:<Search></Search>
      }
    ],
  },
]);
export default router;
