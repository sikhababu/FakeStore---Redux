import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: []
  },
  reducers: {
    AddToCart: (state,action) => {
      state.value = [...state.value, action.payload]

    },
    RemoveCart: (state,action) => {
        state.value = state.value.filter ((product) => product.id !== action.payload)
    }
    
  }
})

// Action creators are generated for each case reducer function
export const { AddToCart, RemoveCart } = cartSlice.actions

export default cartSlice.reducer