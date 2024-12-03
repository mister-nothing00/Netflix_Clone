import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import Login from "./pages/Login";
import Register from "./pages/Register";
import Netflix from "./pages/Netflix";
import Player from "./components/ui/personal/Player";
import Movies from "./pages/Movies";
import TvShows from  "./pages/TvShows";
import UserListedMovies from "./pages/UserListedMovies";

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
    path: "/player",
    element: <Player />,
  },
  {
    path: "/movies",
    element:<Movies/>
  },
  {
    path:"/tv",
    element: <TvShows/>
  },
  {
    path:"/mylist",
    element: <UserListedMovies/>
  },
  {
    path: "/",
    element: <Netflix />,
  },
  
]);

export default function App() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}
