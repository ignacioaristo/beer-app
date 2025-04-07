import { Button, Flex, Text } from "@chakra-ui/react";
import { MainLayout } from "../Layouts/MainLayout/MainLayout";
import { useHistory, useLocation } from "react-router-dom";
import { renderBeerImage } from "@/utils/renderBeerImage";
import { useDispatch, useSelector } from "react-redux";
import { closeOrder } from "@/redux/modules/orders/actions/closeOrder";
import { AppDispatch, RootState } from "@/app/store";
import { fetchOrder } from "@/redux/modules/orders/actions/fetchOrder";

export const Paytment = () => {
  const dispatch = useDispatch<AppDispatch>();
  const history = useHistory();
  const location = useLocation<{
    rounds: [
      {
        items: {
          name: string;
          price_per_unit: number;
          total: number;
        };
      }
    ];
  }>();

  const { isClosingOrder } = useSelector((state: RootState) => state.orders);
  const { isFetching } = useSelector((state: RootState) => state.orders);

  const eachOrder = location?.state.rounds;

  const totalSum = eachOrder?.reduce((acc, current) => {
    return acc + (current.items.total || 0);
  }, 0);
  const taxesAmount = totalSum * 0.1;
  const totalPayment = totalSum + taxesAmount;
  let totalItems = 0;

  const checkoutOrder = async () => {
    await dispatch(closeOrder({ totalPayment, totalItems }));
    await dispatch(fetchOrder());
    history.push("/");
  };

  return (
    <MainLayout
      hasGoBack
      hasScreenTitle={true}
      isLoading={isFetching || isClosingOrder}
      screenTitle={{ title: "Payment", subTitle: "You deserve better meal" }}
    >
      <Flex flexDir="column" justifyContent="space-between" px={4} w={"full"}>
        <Text>Item Ordered</Text>
        {eachOrder.map((order, i) => {
          totalItems += order.items?.total / order.items?.price_per_unit;
          return (
            <Flex key={i} justifyContent="space-between" w="full">
              <Flex alignItems="center">
                {renderBeerImage({ name: order.items?.name })}
                <Flex flexDir="column" ml={10}>
                  <Text>{order.items?.name}</Text>
                  <Text color="#8D92A3">IDR {order.items?.price_per_unit}</Text>
                </Flex>
              </Flex>
              <Text color="#8D92A3" alignSelf="center">
                {order.items?.total / order.items?.price_per_unit} items
              </Text>
            </Flex>
          );
        })}

        <Text my={2}>Details Transaction</Text>
        {eachOrder.map((order, i) => {
          return (
            <Flex key={i} justifyContent="space-between" w={"full"}>
              <Text color="#8D92A3">{order.items.name}</Text>
              <Text>IDR {order.items.total}</Text>
            </Flex>
          );
        })}
        <Flex flexDir="column" gap={2} mb={20}>
          <Flex justifyContent="space-between" w={"full"}>
            <Text color="#8D92A3">Tax 10%</Text>
            <Text>IDR {taxesAmount}</Text>
          </Flex>
          <Flex justifyContent="space-between" w={"full"}>
            <Text color="#8D92A3">Total Price</Text>
            <Text color="#4BAF31">IDR {totalPayment}</Text>
          </Flex>
        </Flex>

        <Button
          onClick={checkoutOrder}
          loading={isFetching || isClosingOrder}
          bottom={0}
          fontSize="md"
          w={"40%"}
          alignSelf="center"
          bgColor="#EB0029"
        >
          Checkout Now
        </Button>
      </Flex>
    </MainLayout>
  );
};
