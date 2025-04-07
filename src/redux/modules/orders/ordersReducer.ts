import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { createOrder } from "./actions/createOrder";
import { fetchOrder } from "./actions/fetchOrder";

export const ordersReducer = combineReducers({
  data: createReducer({} as any, (builder) =>
    builder
      .addCase(createOrder.fulfilled, (_, action) => action.payload)
      .addCase(fetchOrder.fulfilled, (_, action) => action.payload)
  ),
  isFetching: createReducer(false, (builder) =>
    builder
      .addCase(createOrder.pending, () => true)
      .addCase(createOrder.fulfilled, () => false)
      .addCase(createOrder.rejected, () => false)
      .addCase(fetchOrder.pending, () => true)
      .addCase(fetchOrder.fulfilled, () => false)
      .addCase(fetchOrder.rejected, () => false)
  ),
  closedOrders: createReducer({} as any, (builder) =>
    builder.addCase(fetchOrder.fulfilled, (_, action) => {
      return action.payload.filter((order: any) => order.paid === true);
    })
  ),

  openOrders: createReducer({} as any, (builder) =>
    builder.addCase(fetchOrder.fulfilled, (_, action) => {
      return action.payload.filter((order: any) => order.paid === false);
    })
  ),
});
