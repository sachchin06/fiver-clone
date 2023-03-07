import React from "react";
import './app.scss';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Gigs from "./pages/gigs";
import Gig from "./pages/gig";
import Layout from "./layout/Layout";
import Messages from "./pages/messages";
import Message from "./pages/message";
import MyGigs from "./pages/myGigs";
import Add from "./pages/add";
import Orders from "./pages/orders";
function App() {

 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
         {
          path: "/gigs",
          element: <Gigs />,
        },
        {
          path: "/gig/:id",
          element: <Gig />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/mygigs",
          element: <MyGigs />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
         {
          path: "/add",
          element: <Add />,
        }
      ]
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
