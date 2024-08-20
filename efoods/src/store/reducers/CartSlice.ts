import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Menu } from '../../Pages/Home'

type MenuState = {
  Cart: Menu[]
  View: boolean
}

const initialState: MenuState = {
  Cart: [],
  View: false
}
const CartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Menu>) => {
      const ProdutoJaAdicionado = state.Cart.find(
        (Cart) => Cart.nome === action.payload.nome
      )
      if (ProdutoJaAdicionado) {
        alert('Este Item ja foi adicionado ao seu Cart')
      } else state.Cart.push(action.payload)
    },
    remove: (state, action: PayloadAction<Menu>) => {
      state.Cart = [
        ...(state.Cart = state.Cart.filter(
          (Cart) => Cart.id !== action.payload.id
        ))
      ]
    },
    open: (state) => {
      state.View = true
    },
    close: (state) => {
      state.View = false
    },
    clean: (state) => {
      state.Cart = []
    }
  }
})

export const { add, remove, open, close, clean } = CartSlice.actions
export default CartSlice.reducer
