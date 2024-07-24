import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Rotas from './Routes'
import { EstiloGlobal } from './Styles'

function App() {
  return (
    <BrowserRouter>
      <EstiloGlobal />
      <Rotas />
    </BrowserRouter>
  )
}

export default App
