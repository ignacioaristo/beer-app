import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { fetchProducts } from "./actions/fetchProducts";
import { GetProductsOutput } from "./api/getProducts";

export const productReducer = combineReducers({
  stock: createReducer([] as GetProductsOutput, (builder) =>
    builder.addCase(fetchProducts.fulfilled, (_, action) => action.payload)
  ),
});
