import { API_URL } from "../api";
import { sliceCreator } from "../sliceCreator";

export const allProductsSlice = sliceCreator("shop", API_URL);
