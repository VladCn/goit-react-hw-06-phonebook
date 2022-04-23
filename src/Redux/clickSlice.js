import { createSlice } from '@reduxjs/toolkit'

export const clickSlice = createSlice({
  name: 'click',
  initialState: {value: 0},
  reducers: {
    update: (state, action) => {
      state.value += action.payload
    },

  },
})

export const { update } = clickSlice.actions

export default clickSlice.reducer