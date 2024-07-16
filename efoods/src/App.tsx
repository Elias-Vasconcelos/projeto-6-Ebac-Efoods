import React from 'react'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'

function App() {
  const rotas = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    }
  ])
  return <RouterProvider router={rotas} />
}

export default App
