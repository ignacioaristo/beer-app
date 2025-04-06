import React from "react";
import { Flex } from "@chakra-ui/react";

type Props = {
  children?: React.ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  return (
    <Flex
      margin="auto"
      alignSelf="center"
      backgroundColor="white"
      w="50%"
      h="100vh"
      border={"1px solid black"}
      justifyContent="center"
    >
      <main>{children}</main>
    </Flex>
  );
};
