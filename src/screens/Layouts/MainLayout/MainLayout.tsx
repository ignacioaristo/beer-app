import React from "react";
import { Flex } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { IoChevronBackOutline } from "react-icons/io5";
import { useHistory } from "react-router-dom";
import { Button } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
  hasGoBack?: boolean;
  hasScreenTitle?: boolean;
  screenTitle?: {
    title?: string;
    subTitle?: string;
  };
};

export const MainLayout = ({ children, hasGoBack, hasScreenTitle }: Props) => {
  const history = useHistory();

  const goBack = () => {
    console.log("navega?-->");

    history.goBack();
  };
  return (
    <Flex
      position="relative"
      margin="auto"
      alignSelf="center"
      backgroundColor="white"
      w="50%"
      h="100vh"
      border={"1px solid black"}
      justifyContent="center"
      px={4}
    >
      {hasGoBack && (
        <Button
          position="absolute"
          top={4}
          left={4}
          bgColor="red"
          w="40px"
          h="40px"
          onClick={goBack}
        >
          <Icon size="lg" color="white">
            <IoChevronBackOutline />
          </Icon>
        </Button>
      )}
      <main>{children}</main>
    </Flex>
  );
};
