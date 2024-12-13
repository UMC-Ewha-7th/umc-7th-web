import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../constants/cartItems';
import { closeModal } from '../modal/modalSlice';
import { useDispatch } from 'react-redux';

const initialState = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
};
// const dispatch = useDispatch();

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    //증가
    increase: (state, { payload }) => {
      const itemId = payload;
      const item = state.cartItems.find((cartItem) => cartItem.id === itemId);
      item.amount += 1;
    },
    //감소
    decrease: (state, { payload }) => {
      const itemId = payload;
      const item = state.cartItems.find((cartItem) => cartItem.id === itemId);
      item.amount -= 1;
    },
    //삭제
    removeItem: (state, { payload }) => {
      const itemId = payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    //초기화
    clearCart: (state) => {
      state.cartItems = [];
      // dispatch(closeModal());
    },
    //총액 계산, SUM(각 아이템*수량)
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

export const { increase, decrease, removeItem, clearCart, calculateTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
