import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { Orders } from "@/redux/types/orders";
import { createOrder } from "./actions/createOrder";
import { fetchOrder } from "./actions/fetchOrder";
import { closeOrder } from "./actions/closeOrder";

export const ordersReducer = combineReducers({
  data: createReducer({} as Orders[], (builder) =>
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
  closedOrders: createReducer([] as Orders[], (builder) =>
    builder.addCase(fetchOrder.fulfilled, (_, action) => {
      return action.payload.filter((order: Orders) => order.paid === true);
    })
  ),
  isClosingOrder: createReducer(false, (builder) =>
    builder
      .addCase(closeOrder.pending, () => true)
      .addCase(closeOrder.fulfilled, () => false)
      .addCase(closeOrder.rejected, () => false)
  ),
  openOrders: createReducer({} as Orders[], (builder) =>
    builder.addCase(fetchOrder.fulfilled, (_, action) => {
      return action.payload.filter((order: Orders) => order.paid === false);
    })
  ),
});
