import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./routes/Home";
import Frontend from "./routes/careers/Frontend";
import UserDesign from "./routes/careers/UserDesign";
import Mobile from "./routes/careers/Mobile";
import SoftwareTesting from "./routes/careers/software-testing";
import DevOps from "./routes/careers/devOps";
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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
);
