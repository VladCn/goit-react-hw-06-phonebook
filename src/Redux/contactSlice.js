import { createSlice } from '@reduxjs/toolkit'

export const contactSlice = createSlice({
  name: 'contact',
  initialState: {value: []},
  reducers: {
    add: (state, action) => {
      state.value.push(action.payload)

    },
    remove: (state, action) => {
   state.value = state.value.filter((value) => value.id !== action.payload)
    }

  },
})

export const { add, remove} = contactSlice.actions

export default contactSlice.reducer