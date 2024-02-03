import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getItem } from '../../utils/localStorage';
import { CartAddState } from '../../interface/ICardAddState';

interface CartRemoveState {
  id: string | number;
}

const initialState: Array<CartAddState> = getItem('cart') || [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartAddState>) => {
      const { id } = action.payload;
      if (
        state.length === 0 ||
        state.filter((item) => item.id === id).length === 0
      ) {
        state.push(action.payload);
      }
    },
    removeToCart: (state, action: PayloadAction<CartRemoveState>) => {
      const { id } = action.payload;
      if(state.some((item)=> item.id === id)){
        return state = state.filter((item)=> item.id !== id)
      }
    },
  },
});

export const { addToCart, removeToCart } = cartSlice.actions;
