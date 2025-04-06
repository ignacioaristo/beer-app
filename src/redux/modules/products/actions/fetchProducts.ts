import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts, GetProductsOutput } from "../api/getProducts";

export type GetProductsRejectedValue = "request_failed";

export const fetchProducts = createAsyncThunk<
  GetProductsOutput,
  undefined,
  {
    rejectValue: GetProductsRejectedValue;
  }
>("products/FETCH_PRODUCTS", async (_, thunkAPI) => {
  try {
    const res = await getProducts();
    return res;
  } catch {
    return thunkAPI.rejectWithValue("request_failed");
  }
});
