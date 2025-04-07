import { fireEvent, render, waitFor } from "@testing-library/react";
import { ProductDetail } from "./ProductDetail";
import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "@/redux/modules/products/productsReducer";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import { system } from "@/components/ui/theme";
import { ordersReducer } from "@/redux/modules/orders/ordersReducer";
import { addDoc } from "firebase/firestore";

const mockUseLocation = jest.fn();
const mockPush = jest.fn();
const mockGoBack = jest.fn();
jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  useHistory: () => ({
    push: mockPush,
    goBack: mockGoBack,
  }),
  useLocation: () => mockUseLocation(),
}));

beforeEach(() => {
  (addDoc as jest.Mock).mockResolvedValue({});
});

describe("HomePage", () => {
  const mockState = {
    orders: {
      isFetching: false,
    },
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
      orders: ordersReducer,
      products: productReducer,
    },
    preloadedState: mockState,
  });

  it("should render the HomePage component with the beer list", () => {
    mockUseLocation.mockReturnValue({
      state: {
        beerName: "BeerTest",
        beerPrice: 150,
      },
    });
    const screen = render(
      <Provider store={store}>
        <ChakraProvider value={system}>
          <ProductDetail />
        </ChakraProvider>
      </Provider>
    );

    expect(screen.getByText("BeerTest")).toBeInTheDocument();
    expect(screen.getByText("IDR 150")).toBeInTheDocument();
  });

  it("should navigate back if the user press the back button", () => {
    mockUseLocation.mockReturnValue({
      state: {
        beerName: "BeerTest",
        beerPrice: 150,
      },
    });
    const screen = render(
      <Provider store={store}>
        <ChakraProvider value={system}>
          <ProductDetail />
        </ChakraProvider>
      </Provider>
    );

    const goBackButton = screen.getByTestId("go-back-button");
    expect(goBackButton).toBeTruthy();

    fireEvent.click(goBackButton);

    expect(mockGoBack).toHaveBeenCalledTimes(1);
  });

  it("should navigate add item into the order and navigate to the In Progress orders", async () => {
    mockUseLocation.mockReturnValue({
      state: {
        beerName: "BeerTest",
        beerPrice: 150,
      },
    });
    const screen = render(
      <Provider store={store}>
        <ChakraProvider value={system}>
          <ProductDetail />
        </ChakraProvider>
      </Provider>
    );

    const orderNowButton = screen.getByText("Order Now");
    expect(orderNowButton).toBeTruthy();

    fireEvent.click(orderNowButton);

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith("/your-orders");
    });
  });
});
