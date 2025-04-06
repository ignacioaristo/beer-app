import { QuantityCounter } from "@/components/QuantityCounter/QuantityCounter";
import { renderBeerImage } from "@/utils/renderBeerImage";
import { Button, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

import { MainLayout } from "../Layouts/MainLayout/MainLayout";

export const ProductDetail = () => {
  const location = useLocation<{
    beerName: string;
    beerPrice: string;
  }>();

  const [counter, setCounter] = useState(1);

  const beerName = location.state.beerName;
  const beerPrice = location.state.beerPrice;

  const productTotalPrice = Number(beerPrice) * counter;

  return (
    <MainLayout hasGoBack>
      <Flex flexDir="column" alignItems="center">
        {renderBeerImage({
          name: beerName,
          size: { width: "200px", height: "200px" },
        })}
        <Flex flexDir="column" alignItems="center">
          <Flex w="full" justifyContent="space-between" px={6}>
            <Text fontSize="3xl">{beerName}</Text>
            <QuantityCounter setCounter={setCounter} counter={counter} />
          </Flex>
          <Flex mt={4} flexDir="column">
            <Text color="grey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              finibus fringilla nibh, vitae auctor tortor facilisis non. Integer
              vel sem gravida nulla dapibus consectetur. Sed metus nibh,
              interdum dapibus nulla eget, accumsan commodo dolor. Donec maximus
              diam non nulla aliquam, ut hendrerit massa hendrerit. Aliquam et
              ipsum lacinia, bibendum eros non, sodales nunc. In efficitur nibh
              ut quam gravida, sit amet elementum sapien vestibulum. Suspendisse
              potenti. Maecenas fermentum laoreet velit sed blandit. Fusce a
              nunc vitae felis tincidunt tincidunt eu quis justo.
            </Text>

            <Text my={6}>Ingredients:</Text>

            <Text color="grey">Lorem ipsum dolor sit.</Text>
          </Flex>
        </Flex>
        <Flex justifyContent={"space-between"} w="full" mt={10}>
          <Flex flexDir="column">
            <Text fontSize={"lg"} color="grey">
              Total price:
            </Text>
            <Text fontSize={"3xl"}>IDR {productTotalPrice}</Text>
          </Flex>
          <Button fontSize="md" w={"40%"} alignSelf="center" bgColor="red">
            Order Now
          </Button>
        </Flex>
      </Flex>
    </MainLayout>
  );
};
