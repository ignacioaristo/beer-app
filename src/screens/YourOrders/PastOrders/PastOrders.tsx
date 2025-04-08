import { RootState } from "@/app/store";
import { PaidOrder } from "@/assets/svg/PaidOrder";
import { Orders } from "@/redux/types/orders";
import { Flex, Spinner, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";

export const PastOrders = () => {
  const rounds = useSelector((state: RootState) => state.orders.closedOrders);
  const isFetching = useSelector((state: RootState) => state.orders.isFetching);

  const sortOrdersByDateDesc = (orders: Orders[]): Orders[] => {
    return [...orders].sort((a, b) => {
      const dateA = new Date(a.created).getTime();
      const dateB = new Date(b.created).getTime();
      return dateB - dateA;
    });
  };

  const sortedOrders = rounds && sortOrdersByDateDesc(rounds);

  if (isFetching) {
    return (
      <Flex justifyContent="center">
        <Spinner size="md" alignSelf="center" />
      </Flex>
    );
  }

  return rounds && rounds.length >= 1 ? (
    <Flex flexDir="column">
      {sortedOrders.map((round: Orders, i) => {
        return (
          <Flex key={i} w="full" alignItems="center">
            <PaidOrder />
            <Flex flexDir="column" ml={4}>
              <Text>Order Number {i + 1}</Text>
              <Text color="#8D92A3">
                {round?.totalItems} items • IDR {round?.totalAmountPaid}
              </Text>
              <Text color="#8D92A3">{round.created}</Text>
            </Flex>
          </Flex>
        );
      })}
    </Flex>
  ) : null;
};
