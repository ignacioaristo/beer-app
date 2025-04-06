import { RootState } from "@/app/store";
import { renderBeerImage } from "@/utils/renderBeerImage";
import { Flex, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export const PastOrders = () => {
  const history = useHistory();

  const rounds = useSelector((state: RootState) => state.orders.closedOrders);

  return rounds.length >= 1 ? (
    <Flex flexDir="column">
      {rounds.map((round: any, i) => {
        const itemQuantity = round.rounds?.total / round.rounds?.price_per_unit;
        return (
          <Flex w="full" alignItems="center">
            {renderBeerImage({ name: round.rounds?.items?.name })}
            <Flex flexDir="column" ml={4}>
              <Text>{round.rounds?.name}</Text>
              <Text color="#8D92A3">
                {itemQuantity} items • IDR{" "}
                {itemQuantity * round.rounds?.price_per_unit}
              </Text>
            </Flex>
          </Flex>
        );
      })}
    </Flex>
  ) : null;
};
