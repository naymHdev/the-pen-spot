import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ICartItem {
  product: string;
  name: string;
  price: number;
  quantity: number;
  stock: number;
  image: string;
}

interface CartState {
  items: ICartItem[];
  totalQuantity: number;
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<ICartItem>) {
      const existingItem = state.items.find(
        (item) => item.product === action.payload.product
      );

      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      state.totalQuantity += action.payload.quantity;
      state.totalPrice += action.payload.price * action.payload.quantity;
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
