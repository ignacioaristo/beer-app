import { QuantityCounter } from "@/components/QuantityCounter/QuantityCounter";
import { renderBeerImage } from "@/utils/renderBeerImage";
import { Button, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { MainLayout } from "../Layouts/MainLayout/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store";
import { format } from "date-fns";
import { createOrder } from "@/redux/modules/orders/actions/createOrder";
import { fetchOrder } from "@/redux/modules/orders/actions/fetchOrder";

export const ProductDetail = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isFetching } = useSelector((state: RootState) => state.orders);
  const history = useHistory();
  const location = useLocation<{
    beerName: string;
    beerPrice: string;
  }>();

  const [counter, setCounter] = useState(1);

  const beerName = location.state.beerName;
  const beerPrice = location.state.beerPrice;

  const productTotalAmount = Number(beerPrice) * counter;

  const orderNow = async () => {
    await dispatch(
      createOrder({
        created: format(new Date(), "yyyy-MM-dd HH:mm:ss"),
        items: {
          name: beerName,
          price_per_unit: beerPrice,
          total: Number(beerPrice) * counter,
        },
      })
    );

    await dispatch(fetchOrder());
    history.push("/your-orders");
  };

  return (
    <MainLayout hasGoBack isLoading={isFetching}>
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
            <Text>
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
            <Text fontSize={"3xl"}>IDR {productTotalAmount}</Text>
          </Flex>
          <Button
            onClick={orderNow}
            loading={isFetching}
            fontSize="md"
            w={"40%"}
            alignSelf="center"
            bgColor="#EB0029"
          >
            Order Now
          </Button>
        </Flex>
      </Flex>
    </MainLayout>
  );
};
