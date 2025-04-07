import { fireEvent, render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import { system } from "@/components/ui/theme";
import { ordersReducer } from "@/redux/modules/orders/ordersReducer";
import { addDoc } from "firebase/firestore";
import { InProgress } from "./InProgress";

const mockUseLocation = jest.fn();
const mockPush = jest.fn();
jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  useHistory: () => ({
    push: mockPush,
  }),
  useLocation: () => mockUseLocation(),
}));

beforeEach(() => {
  (addDoc as jest.Mock).mockResolvedValue({});
});

describe("InProgress", () => {
  const mockState = {
    orders: {
      openOrders: [
        {
          created: "2023-10-01T00:00:00Z",
          discounts: 0,
          id: "12345",
          items: null,
          paid: false,
          rounds: [
            {
              created: "2023-10-01T00:00:00Z",
              items: {
                name: "Beer1",
                price_per_unit: 150,
                total: 300,
              },
            },
            {
              created: "2023-10-01T00:00:00Z",
              items: {
                name: "Beer2",
                price_per_unit: 50,
                total: 1,
              },
            },
          ],
          subtotal: 0,
          taxes: 0,
          totalAmountPaid: 350,
          totalItems: 3,
        },
      ],
    },
  };

  const store = configureStore({
    reducer: {
      orders: ordersReducer,
    },
    preloadedState: mockState,
  });

  it("should render in progress rounds ordered", () => {
    const screen = render(
      <Provider store={store}>
        <ChakraProvider value={system}>
          <InProgress />
        </ChakraProvider>
      </Provider>
    );

    expect(screen.getByText("Beer1")).toBeInTheDocument();
    expect(screen.getByText("2 items • IDR 300")).toBeInTheDocument();
  });

  it("should navigate to the Payment screen if the user click the Pay button", () => {
    const screen = render(
      <Provider store={store}>
        <ChakraProvider value={system}>
          <InProgress />
        </ChakraProvider>
      </Provider>
    );

    const payButton = screen.getByText("Pay");
    fireEvent.click(payButton);

    expect(mockPush).toHaveBeenCalledWith("/payment", {
      rounds: [
        {
          created: "2023-10-01T00:00:00Z",
          items: {
            name: "Beer1",
            price_per_unit: 150,
            total: 300,
          },
        },
        {
          created: "2023-10-01T00:00:00Z",
          items: {
            name: "Beer2",
            price_per_unit: 50,
            total: 1,
          },
        },
      ],
    });
  });
});
