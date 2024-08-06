import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Cardapio } from '../../Pages/Home'

type CardapioState = {
  Carrinho: Cardapio[]
  View: boolean
}

const initialState: CardapioState = {
  Carrinho: [],
  View: false
}
const CartSlice = createSlice({
  name: 'Carrinho',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Cardapio>) => {
      const ProdutoJaAdicionado = state.Carrinho.find(
        (carrinho) => carrinho.nome === action.payload.nome
      )
      if (ProdutoJaAdicionado) {
        alert('Este Item ja foi adicionado ao seu carrinho')
      } else state.Carrinho.push(action.payload)
    },
    remove: (state, action: PayloadAction<Cardapio>) => {
      state.Carrinho = [
        ...(state.Carrinho = state.Carrinho.filter(
          (carrinho) => carrinho.id !== action.payload.id
        ))
      ]
    },
    open: (state) => {
      state.View = true
    },
    close: (state) => {
      state.View = false
    }
  }
})

export const { add, remove, open, close } = CartSlice.actions
export default CartSlice.reducer
