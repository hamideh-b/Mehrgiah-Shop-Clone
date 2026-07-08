import { API_URL } from "../api";
import { sliceCreator } from "../sliceCreator";

export const productCategoriesSlice = sliceCreator(
  "productCategories",
  API_URL,
);
