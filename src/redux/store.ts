import { configureStore } from "@reduxjs/toolkit"
import { cartSlice } from "./slice";

export const store = configureStore({
  reducer: {
    cartReducer: cartSlice.reducer
  }
})
  
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
