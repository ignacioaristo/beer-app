import { RootState } from "@/app/store";
import { PaidOrder } from "@/assets/svg/PaidOrder";
import { Flex, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";

export const PastOrders = () => {
  const rounds = useSelector((state: RootState) => state.orders.closedOrders);

  return rounds.length >= 1 ? (
    <Flex flexDir="column">
      {rounds.map((round: any, i) => {
        return (
          <Flex key={i} w="full" alignItems="center">
            <PaidOrder />
            <Flex flexDir="column" ml={4}>
              <Text>Order Number {i + 1}</Text>
              <Text color="#8D92A3">
                {round?.totalItems} items • IDR {round?.totalAmountPaid}
              </Text>
            </Flex>
          </Flex>
        );
      })}
    </Flex>
  ) : null;
};
