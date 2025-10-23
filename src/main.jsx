import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./component/rout/Root.jsx";

import Logform from "./component/loginform/Logform.jsx";

import Regi from "./component/regi/Regi.jsx";
import Home from "./component/main/Home.jsx";
import Singleplant from "./component/main/Singleplant.jsx";
import MyPlant from "./component/main/MyPlant.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/details/:id",
        Component: Singleplant,
      },
      {
        path: "/myplants",
        Component: MyPlant,
      },
    ],
  },
  {
    path: "/loginform",
    Component: Logform,
  },
  {
    path: "/regi",
    Component: Regi,
  },
  {
    path: "/details",
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
