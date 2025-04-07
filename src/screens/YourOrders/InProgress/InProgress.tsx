import { RootState } from "@/app/store";
import { EmptyOrdersInProgress } from "@/assets/svg/EmptyOrdersInProgress";
import { Rounds } from "@/redux/types/orders";
import { renderBeerImage } from "@/utils/renderBeerImage";
import { Button, Flex, Span, Spinner, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export const InProgress = () => {
  const history = useHistory();
  const { isFetching } = useSelector((state: RootState) => state.orders);

  const rounds =
    useSelector((state: RootState) => state?.orders?.openOrders?.[0]?.rounds) ??
    [];

  const toCheckout = () => {
    history.push("/payment", { rounds });
  };

  const newOrder = () => {
    history.push("/");
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
      {rounds?.map((round: Rounds, i) => {
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
  ) : (
    <Flex flexDir="column" h="50vh" w="full" mt={10} maxW="200px">
      <Flex justifyContent="center" alignItems="center">
        <EmptyOrdersInProgress width={200} height={200} />
      </Flex>
      <Text textAlign="center" color="#8D92A3" mt={4}>
        No orders in progress yet, start one{" "}
        <Span color="blue" textDecoration="underline" onClick={newOrder}>
          from here
        </Span>
      </Text>
    </Flex>
  );
};
