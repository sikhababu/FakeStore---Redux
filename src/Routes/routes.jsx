import {createBrowserRouter} from "react-router-dom";
import Homepage from "../Pages/Homepage";
import PageLayout from "../Layouts/PageLayout";
import ProductDetails from "../Pages/ProductDetails";



  export const router = createBrowserRouter([
    {
      path: "/",
      element: <PageLayout />,


    children : [

      { path: "",
      element: <Homepage />

    },

    {
      path: "ProductDetail/:id",
      element: <ProductDetails />
    
    }

      ]

    }
   

  ]);
  