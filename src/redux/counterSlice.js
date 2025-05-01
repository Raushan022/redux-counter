import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   value: 0,
}

const counterSlice = createSlice({
   name: 'counterSlice',
   initialState,
   reducers: {
      increment: (state) => {
         state.value = state.value + 1
      },
      decrement: (state) => {
         state.value = state.value - 1
      },
      reset: (state) => {
         state.value = 0
      },
      incrementBy: (state, action) => {
         state.value = state.value + action.payload
      },
      decrementBy: (state, action) => {
         state.value = state.value - action.payload
      }
   }
})

export const { increment, decrement, reset, incrementBy, decrementBy } = counterSlice.actions;

export default counterSlice.reducer;