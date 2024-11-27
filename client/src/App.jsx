import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Importa i componenti per le route
import Login from "./pages/Login";
import Register from "./pages/Register";
import Netflix from "./pages/Netflix";
import Player from "./components/ui/personal/Player";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <Netflix />,
  },
  {
    path: "/player",
    element: <Player />,
  },
]);

export default function App() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}
