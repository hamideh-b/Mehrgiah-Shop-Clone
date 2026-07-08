import { API_URL } from "../api";
import { sliceCreator } from "../sliceCreator";

export const accessoriesSlice = sliceCreator("accessories", API_URL);
