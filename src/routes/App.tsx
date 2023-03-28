import React from "react";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { Favorites } from "../pages/Favorites";
import { Homepage } from "../pages/Homepage";
import { UserDetail } from "../pages/UserDetail";
import "../styles/App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/favorites",
      element: <Favorites />,
    },
    {
      path: "/users/:user_id",
      element: <UserDetail />,
    },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
