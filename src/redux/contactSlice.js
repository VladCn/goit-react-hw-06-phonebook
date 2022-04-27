import { createSlice } from '@reduxjs/toolkit'

export const contactSlice = createSlice({
  name: 'contact',
  initialState: {value: [], filter: ""},
  reducers: {
    add: (state, action) => {
      state.value.push(action.payload)
    },
    remove: (state, action) => {
   state.value = state.value.filter((value) => value.id !== action.payload)
    },

    setFilter:(state, action) => {
      state.filter = action.payload
    }
  },
})

export const { add, remove, setFilter } = contactSlice.actions

export default contactSlice.reducer