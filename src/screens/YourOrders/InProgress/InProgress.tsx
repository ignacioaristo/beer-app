import { RootState } from "@/app/store";
import { renderBeerImage } from "@/utils/renderBeerImage";
import { Button, Flex, Spinner, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export const InProgress = () => {
  const history = useHistory();
  const { isFetching } = useSelector((state: RootState) => state.orders);

  const rounds =
    useSelector((state: RootState) => state.orders.openOrders[0]?.rounds) ?? [];

  const toCheckout = () => {
    history.push("/payment", { rounds });
  };

  if (isFetching) {
    return (
      <Flex justifyContent="center">
        <Spinner size="md" alignSelf="center" />
      </Flex>
    );
  }

  return rounds.length !== 0 ? (
    <Flex flexDir="column" w="full">
      {rounds?.map((round: any, i) => {
        const itemQuantity = round.items?.total / round.items?.price_per_unit;
        return (
          <Flex w="full" alignItems="center" key={i}>
            {renderBeerImage({ name: round.items?.name })}
            <Flex flexDir="column" ml={4}>
              <Text>{round.items?.name}</Text>
              <Text color="#8D92A3">
                {itemQuantity} items • IDR{" "}
                {itemQuantity * round.items?.price_per_unit}
              </Text>
            </Flex>
          </Flex>
        );
      })}

      <Button
        onClick={toCheckout}
        fontSize="md"
        w={"40%"}
        alignSelf="center"
        bgColor="#EB0029"
      >
        Pay
      </Button>
    </Flex>
  ) : null;
};
