import { createAsyncThunk } from "@reduxjs/toolkit";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase/config";
import { RootState } from "@/app/store";

export type CloseOrderRejectedValue = "request_failed";
export type CloseOrderInput = {};

export const closeOrder = createAsyncThunk<
  any,
  { totalPayment: number; totalItems: number },
  {
    rejectValue: CloseOrderRejectedValue;
  }
>("orders/CLOSE_ORDER", async ({ totalPayment, totalItems }, thunkAPI) => {
  const state = thunkAPI.getState() as RootState;
  const isNewOrder = state.orders?.openOrders?.[0]?.paid ?? true;

  try {
    if (!isNewOrder) {
      const orderId = state.orders?.openOrders?.[0].id ?? "";

      await updateDoc(doc(db, "orders", orderId), {
        paid: true,
        totalAmountPaid: totalPayment,
        totalItems,
      });
    }
  } catch (e) {
    return thunkAPI.rejectWithValue("request_failed");
  }
});
