import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import RecipeList from './components/RecipeList'
import Home from './components/Home'
import Recepie from './components/Recepie'
import { Route,RouterProvider, createBrowserRouter } from 'react-router-dom'

function App() {

  const route = createBrowserRouter([
    {path: "/",
     element: <Home />
  },
  {
    path: '/foods',
    element: <RecipeList />
  },
  {
    path: "/recipes/:recipeId",
    element: <Recepie />
  }
  ])

  return (
    <>
     <RouterProvider router={route} />
    </>
  )
}

export default App