import { createSlice } from "@reduxjs/toolkit";
const savedCart = localStorage.getItem("cart");
const initialCart = savedCart ? JSON.parse(savedCart) : [];

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: initialCart,
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.cartItems.find(
        (item) => item.id === product.id,
      );
      existingProduct
        ? (existingProduct.quantity += product.quantity)
        : state.cartItems.push({ ...product, quantity: product.quantity });
    },
    increaseQuantity: (state, action) => {
      const id = action.payload;
      const product = state.cartItems.find((item) => item.id === id);
      if (product) {
        product.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const id = action.payload;

      const product = state.cartItems.find((item) => item.id === id);

      if (!product) return;

      if (product.quantity > 1) {
        product.quantity -= 1;
      } else {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
    },
  },
});
export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
