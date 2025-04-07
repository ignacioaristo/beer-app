import { productReducer } from "./productsReducer";
import { fetchProducts } from "./actions/fetchProducts";

const mockProducts = {
  data: [
    {
      last_updated: "2024-09-10 12:00:00",
      beers: [
        {
          name: "Beer1",
          price: 10,
          quantity: 5,
        },
      ],
    },
  ],
};

describe("productReducer", () => {
  it("should handle the products", () => {
    let state = productReducer(undefined, { type: "" });

    expect(state.isFetching).toBe(false);
    expect(state.data).toEqual({});

    state = productReducer(state, { type: fetchProducts.pending.type });
    expect(state.isFetching).toBe(true);

    state = productReducer(state, {
      type: fetchProducts.fulfilled.type,
      payload: mockProducts,
    });
    expect(state.isFetching).toBe(false);
    expect(state.data).toEqual(mockProducts);
  });
});
