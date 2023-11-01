import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./routes/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./css/index.scss";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Home />,
   },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
);
