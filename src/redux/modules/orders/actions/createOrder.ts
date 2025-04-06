import { createAsyncThunk } from "@reduxjs/toolkit";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase/config";
import { format } from "date-fns";
import { RootState } from "@/app/store";

export type CreateOrderRejectedValue = "request_failed";
export type CreateOrderInput = {
  created: string;
  items: {
    name: string;
    price_per_unit: string;
    total: number;
  };
};

export const createOrder = createAsyncThunk<
  any,
  CreateOrderInput,
  {
    rejectValue: CreateOrderRejectedValue;
  }
>("orders/CREATE_ORDER", async ({ items, created }, thunkAPI) => {
  const state = thunkAPI.getState() as RootState;
  const isOrderOpen = state.orders?.data[0]?.paid ?? true;

  try {
    if (!isOrderOpen) {
      console.log("LAACTUALIZA");
      const orderData = state.orders.data[0];
      const orderId = state.orders.data[0].id;
      const rounds = [...orderData.rounds];

      console.log("orderID-->", orderId);
      rounds.push({ created: new Date().toISOString(), items });

      await updateDoc(doc(db, "orders", orderId), { rounds });

      console.log("Orden actualizada correctamente");
    } else {
      console.log("La tiene que crear");

      const newOrder = {
        created: format(new Date(), "yyyy-MM-dd HH:mm:ss"),
        paid: false,
        subtotal: 0,
        taxes: 0,
        discounts: 0,
        items: [],
        rounds: [
          {
            created,
            items,
          },
        ],
      };

      const docRef = await addDoc(collection(db, "orders"), newOrder);
      return { newOrder, id: docRef.id };
    }
  } catch (e) {
    console.log("ERROR--->", e);
    return thunkAPI.rejectWithValue("request_failed");
  }
});
