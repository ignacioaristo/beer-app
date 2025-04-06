import { Button, Flex, Text } from "@chakra-ui/react";

type Props = {
  setCounter: (counter: number) => void;
  counter: number;
};

export const QuantityCounter: React.FC<Props> = ({ counter, setCounter }) => {
  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter > 1 ? counter - 1 : counter);
  };

  return (
    <Flex justifyContent="space-evenly" alignItems="center" w="170px">
      <Button
        bgColor="white"
        color="black"
        onClick={handleDecrement}
        fontSize="2xl"
        border="2px solid black"
        borderRadius={12}
      >
        -
      </Button>
      <Text fontFamily="monospace" fontSize="2xl" mx={2}>
        {counter}
      </Text>
      <Button
        bgColor="white"
        color="black"
        border="2px solid black"
        borderRadius={12}
        onClick={handleIncrement}
        fontSize="2xl"
      >
        +
      </Button>
    </Flex>
  );
};
