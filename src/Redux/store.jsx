import { configureStore } from "@reduxjs/toolkit";
import { menuSlice } from "./menu/menuSlice";
import { sliderSlice } from "./slider/sliderSlice";
import { productCategoriesSlice } from "./productCatagoreis/productCatagoreisSlice";
import { accessoriesSlice } from "./accessories/accessories";
import { allProductsSlice } from "./allProducts/allProducts";
import cartReducer from "./cartSlice/cartSlice";

export const store = configureStore({
  reducer: {
    menu: menuSlice.reducer,
    slider: sliderSlice.reducer,
    productCategories: productCategoriesSlice.reducer,
    accessories: accessoriesSlice.reducer,
    allProducts: allProductsSlice.reducer,
    cart: cartReducer,
  },
});
