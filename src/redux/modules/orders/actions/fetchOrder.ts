import { createAsyncThunk } from "@reduxjs/toolkit";
import { getOrder } from "../api/getOrder";

export type GetProductsRejectedValue = "request_failed";

export const fetchOrder = createAsyncThunk<
  any,
  undefined,
  {
    rejectValue: GetProductsRejectedValue;
  }
>("products/FETCH_ORDER", async (_, thunkAPI) => {
  try {
    const res = await getOrder();
    return res;
  } catch {
    return thunkAPI.rejectWithValue("request_failed");
  }
});
