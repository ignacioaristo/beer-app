import { AppDispatch, RootState } from "@/app/store";
import { fetchProducts } from "@/redux/modules/products/actions/fetchProducts";
import { Beer } from "@/redux/modules/products/api/getProducts";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "@chakra-ui/react";
import { renderBeerImage } from "@/utils/renderBeerImage";
import { useHistory } from "react-router-dom";

export const NewTaste = () => {
  const dispatch = useDispatch<AppDispatch>();
  const history = useHistory();

  const beers =
    useSelector((state: RootState) => state.products.data.beers) ?? [];
  const isFetching = useSelector(
    (state: RootState) => state.products.isFetching
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const onClickProductDetail = (product: Beer) => {
    history.push("/product-detail", {
      beerName: product.name,
      beerPrice: product.price,
    });
  };

  if (isFetching) {
    return (
      <Flex justifyContent="center">
        <Spinner size="md" alignSelf="center" />
      </Flex>
    );
  }

  return (
    <Flex flexDir="column">
      {beers.map((beer: Beer) => (
        <Flex key={beer.name} onClick={() => onClickProductDetail(beer)}>
          {renderBeerImage({ name: beer.name })}
          <Flex flexDir="column" justifyContent="center" ml={8}>
            <Text fontSize="md">{beer.name}</Text>
            <Text fontSize="xs" color="grey">
              IDR {beer.price}
            </Text>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};
