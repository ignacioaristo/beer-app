import { fireEvent, render } from "@testing-library/react";
import { HomePage } from "./HomePage";
import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "@/redux/modules/products/productsReducer";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import { system } from "@/components/ui/theme";

const mockUseLocation = jest.fn().mockReturnValue({ state: {} });
const mockPush = jest.fn();
jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  useHistory: () => ({
    push: mockPush,
  }),
  useLocation: () => mockUseLocation(),
}));

describe("HomePage", () => {
  const mockState = {
    products: {
      isFetching: false,
      data: {
        beers: [
          { name: "Beer1", price: 10, quantity: 20 },
          { name: "Beer2", price: 15, quantity: 5 },
        ],
        last_updated: "2023-10-01T00:00:00Z",
      },
    },
  };

  const store = configureStore({
    reducer: {
      products: productReducer,
    },
    preloadedState: mockState,
  });

  it("should render the HomePage component with the beer list", () => {
    const screen = render(
      <Provider store={store}>
        <ChakraProvider value={system}>
          <HomePage />
        </ChakraProvider>
      </Provider>
    );

    expect(screen.getByText("Beer1")).toBeInTheDocument();
    expect(screen.getByText("IDR 10")).toBeInTheDocument();
    expect(screen.getByText("Beer2")).toBeInTheDocument();
    expect(screen.getByText("IDR 15")).toBeInTheDocument();
  });

  it("should navigate to Product Details if the user clicks an item", () => {
    const screen = render(
      <Provider store={store}>
        <ChakraProvider value={system}>
          <HomePage />
        </ChakraProvider>
      </Provider>
    );

    const beerButton = screen.getByText("Beer1");

    fireEvent.click(beerButton);

    expect(mockPush).toHaveBeenCalledWith("/product-detail", {
      beerName: "Beer1",
      beerPrice: 10,
    });
  });
});
