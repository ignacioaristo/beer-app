import { RootState } from "@/app/store";
import { Beer } from "@/redux/modules/products/api/getProducts";
import { renderBeerImage } from "@/utils/renderBeerImage";
import { Flex, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const HorizontalCarousel = () => {
  const history = useHistory();
  const beers =
    useSelector((state: RootState) => state.products.data.beers) ?? [];

  const onClickProductDetail = (product: Beer) => {
    history.push("/product-detail", {
      beerName: product.name,
      beerPrice: product.price,
    });
  };

  return (
    <Flex
      overflowX="auto"
      overflowY="hidden"
      py={4}
      px={2}
      whiteSpace="nowrap"
      maxH="100vw"
      scrollbar={"hidden"}
      flex={1}
    >
      {beers.map((beer, i) => (
        <Flex
          onClick={() => onClickProductDetail(beer)}
          flexDir="column"
          alignItems="center"
          justifyContent="space-between"
          key={i}
          minW="200px"
          h="150px"
          borderRadius={16}
          mx={2}
          border="1px solid rgba(0,0,0,0.1)"
          boxShadow="md"
        >
          {renderBeerImage({
            name: beer.name,
            size: { width: "100px", height: "100px" },
          })}
          <Text
            bg="#8D92A3"
            w="100%"
            textAlign="center"
            color="black"
            fontWeight="bold"
            fontSize="lg"
            borderBottomRadius={16}
          >
            {beer.name}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
};

export default HorizontalCarousel;
