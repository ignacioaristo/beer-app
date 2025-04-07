import React from "react";
import { Flex, Text, Icon } from "@chakra-ui/react";
import { IoChevronBackOutline } from "react-icons/io5";
import { useHistory } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { NavBottomTabBar } from "../NavBottomTabBar/NavBottomTabBar";
import { screenToNotShowBottomBar } from "./constants";

type Props = {
  children: React.ReactNode;
  hasGoBack?: boolean;
  hasScreenTitle?: boolean;
  screenTitle?: {
    title?: string;
    subTitle?: string;
  };
  isLoading?: boolean;
};

export const MainLayout = ({
  children,
  hasGoBack,
  hasScreenTitle,
  screenTitle,
  isLoading,
}: Props) => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };
  return (
    <Flex
      flexDir="column"
      margin="auto"
      w={{ sm: "100%", md: "60%" }}
      px={4}
      maxH="100dvh"
      minH="100dvh"
      overflow="auto"
    >
      {hasGoBack || hasScreenTitle ? (
        <Flex w="full" mb={4} mt={4} minH={"60px"}>
          {hasGoBack && (
            <Button
              w="20px"
              alignSelf="center"
              bgColor="#EB0029"
              onClick={goBack}
              disabled={isLoading}
              data-testid="go-back-button"
            >
              <Icon size="xl" color="white">
                <IoChevronBackOutline />
              </Icon>
            </Button>
          )}

          {hasScreenTitle && (
            <Flex flexDir="column" ml={10} alignSelf="center">
              <Text fontSize="2xl" fontWeight="semibold">
                {screenTitle?.title}
              </Text>
              <Text fontSize="lg" color="#8D92A3">
                {screenTitle?.subTitle}
              </Text>
            </Flex>
          )}
        </Flex>
      ) : null}

      <Flex flex={1} justifyContent="center" w="100%" overflowY="scroll">
        {children}
      </Flex>

      {!screenToNotShowBottomBar.includes(window.location.pathname) ? (
        <NavBottomTabBar />
      ) : null}
    </Flex>
  );
};
