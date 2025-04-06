import React from "react";
import { Flex, Text, Icon } from "@chakra-ui/react";
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

export const MainLayout = ({
  children,
  hasGoBack,
  hasScreenTitle,
  screenTitle,
}: Props) => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };
  return (
    <Flex
      flexDir="column"
      alignSelf="center"
      margin="auto"
      backgroundColor="white"
      w="50%"
      h="100vh"
      border={"1px solid black"}
      px={4}
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

      <main>{children}</main>
    </Flex>
  );
};
