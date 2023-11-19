import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./routes/Home";
import Frontend from "./routes/careers/Frontend";
import UserDesign from "./routes/careers/UserDesign";
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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
);
