export type ItemsPerRound = {
  name: string;
  price_per_unit: number;
  total: number;
};

export type Rounds = {
  created: string;
  items: ItemsPerRound;
};

export type Orders = {
  created: string;
  discounts: number;
  id: string;
  items: [];
  paid: boolean;
  rounds: Rounds[];
  subtotal: number;
  taxes: number;
  totalAmountPaid: number;
  totalItems: number;
};
