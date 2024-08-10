import { configureStore } from '@reduxjs/toolkit'

import CartSlice from './reducers/CartSlice'
import api from '../services/api'

export const store = configureStore({
  reducer: {
    Cart: CartSlice,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
