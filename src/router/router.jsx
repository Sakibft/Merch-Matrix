import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Login from "../Login";
import Register from "../Register";
 

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement: <h1>Error found</h1>,
   
      children:[
      {
        path:'/login',
        element:<Login></Login>

      },
      {
        path:'/register',
        element:<Register></Register>
      }
      ]
    },
  ]);
  export default  router ;