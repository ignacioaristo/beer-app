import React from "react";
import { Flex, Text, Icon } from "@chakra-ui/react";
import { IoChevronBackOutline } from "react-icons/io5";
import { useHistory } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { NavBottomTabBar } from "../NavBottomTabBar/NavBottomTabBar";

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
      backgroundColor="white"
      w="50%"
      h="100vh"
      px={4}
      border={"1px solid #EB0029"}
    >
      {hasGoBack || hasScreenTitle ? (
        <Flex
          mt={10}
          ml={6}
          position="relative"
          alignSelf="flex-start"
          w="full"
          h="80px"
          mb={hasScreenTitle ? 20 : 4}
        >
          {hasGoBack && (
            <Button
              w="20px"
              alignSelf="center"
              bgColor="#EB0029"
              onClick={goBack}
              disabled={isLoading}
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

      <Flex
        height="100vh"
        justifyContent={"center"}
        w="100%"
        overflowY="scroll"
      >
        {children}
      </Flex>

      <NavBottomTabBar />
    </Flex>
  );
};
