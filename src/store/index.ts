import { configureStore } from '@reduxjs/toolkit'
import api from '../services/api'
import cartreducer from '../store/reducers/cart'

export const store = configureStore({
  reducer: {
    cart: cartreducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getdefaultmiddleware) =>
    getdefaultmiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
