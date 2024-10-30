import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Rotas from './Routes'
import { EstiloGlobal } from './Styles'
import { Provider } from 'react-redux'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <EstiloGlobal />
        <Rotas />
      </BrowserRouter>
    </Provider>
  )
}

export default App
