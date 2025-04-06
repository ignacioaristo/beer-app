import { db } from "@/firebase/config";
import { collection, getDocs } from "firebase/firestore";

export type Beer = {
  name: string;
  price: string;
};

export type GetProductsOutput = {
  beers: Beer[];
  last_updated: number;
};

export const getOrder = async (): Promise<any> => {
  try {
    const stockRef = collection(db, "orders");
    const snapshot = await getDocs(stockRef);

    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return data;
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
};
