import { db } from "@/firebase/config";
import { collection, getDocs } from "firebase/firestore";

export type Beer = {
  name: string;
  price: number;
  quantity: number;
};

export type GetProductsOutput = {
  beers: Beer[];
  last_updated: string;
};

export const getProducts = async (): Promise<GetProductsOutput> => {
  const stockRef = collection(db, "stock");
  const snapshot = await getDocs(stockRef);

  const data = snapshot.docs.map((doc) => doc.data());

  return {
    beers: data[0]?.beers || [],
    last_updated: data[0]?.last_updated || 0,
  };
};
