import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const sliceCreator = (name, url) => {
  const fetchData = createAsyncThunk(`${name}/fetch`, async () => {
    const res = await axios(url);
    return res.data[name];
  });
  const slice = createSlice({
    name,
    initialState: {
      data: [],
      loading: true,
      error: "",
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchData.fulfilled, (state, action) => {
          state.data = action.payload;
          state.loading = false;
        })
        .addCase(fetchData.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchData.rejected, (state, action) => {
          state.error = action.error.message;
          state.loading = false;
        });
    },
  });
  return {
    reducer: slice.reducer,
    actions: { fetchData },
  };
};
