import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./routes/Home";
import Frontend from "./routes/careers/frontend";
import UserDesign from "./routes/careers/user-design";
import Mobile from "./routes/careers/mobile";
import SoftwareTesting from "./routes/careers/software-testing";
import DevOps from "./routes/careers/devOps";
import MachineLearning from "./routes/careers/machine-learning";
import ProductManagement from "./routes/careers/product-management";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./css/index.scss";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Home />,
   },
   {
      path: "/career/frontend-development",
      element: <Frontend />,
   },
   {
      path: "/career/user-design",
      element: <UserDesign />,
   },
   {
      path: "/career/mobile-development",
      element: <Mobile />,
   },
   {
      path: "/career/software-testing",
      element: <SoftwareTesting />,
   },
   {
      path: "/career/development-operations",
      element: <DevOps />,
   },
   {
      path: "/career/product-management",
      element: <ProductManagement />,
   },
   {
      path: "/career/machine-learning",
      element: <MachineLearning />,
   },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
);
