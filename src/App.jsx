import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Pages/Home";
import RoomDetails from "./Pages/RoomDetails";
import Header from "./components/Header";
import Footer from "./components/Footer"

function App() {

  
  /* React Router */

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Home />
    },
    {
      path: "/room/:id",
      element:<RoomDetails/>
    }
  ])

  return (
    <div className="App">
      < Header />
      < RouterProvider router={router} />
      < Footer />
      
    </div>
  )
}

export default App
