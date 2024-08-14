import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
 

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement: <h1>Error found</h1>,
   
      children:[
        {
          path:'/x',
          element:<h1>hi everyone </h1>
        },
        {
          path:'/t',
          element: <h3>test router </h3>
        }
      ]
    },
  ]);
  export default  router ;