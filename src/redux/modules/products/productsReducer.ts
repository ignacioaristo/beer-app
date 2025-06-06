import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { fetchProducts } from "./actions/fetchProducts";
import { GetProductsOutput } from "./api/getProducts";

export const productReducer = combineReducers({
  data: createReducer({} as GetProductsOutput, (builder) =>
    builder.addCase(fetchProducts.fulfilled, (_, action) => action.payload)
  ),
  isFetching: createReducer(false, (builder) =>
    builder
      .addCase(fetchProducts.pending, () => true)
      .addCase(fetchProducts.fulfilled, () => false)
      .addCase(fetchProducts.rejected, () => false)
  ),
});
