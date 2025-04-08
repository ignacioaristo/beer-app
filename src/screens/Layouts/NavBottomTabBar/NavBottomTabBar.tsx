import { HomeTab } from "@/assets/svg/HomeTab";
import { OrdersTab } from "@/assets/svg/OrdersTab";
import { ProfileTab } from "@/assets/svg/ProfileTab";
import { Flex, Button } from "@chakra-ui/react";
import { useHistory, useLocation } from "react-router-dom";

type TabSelection = "/" | "/your-orders" | "/profile";

export const NavBottomTabBar = () => {
  const history = useHistory();
  const location = useLocation();
  const isSelected = (route: string) => location.pathname === route;

  const redirectTo = (tab: TabSelection) => {
    history.push(tab);
  };
  return (
    <Flex
      position="relative"
      bottom={0}
      w="full"
      justifyContent="center"
      bg="white"
      py={4}
    >
      <Button
        onClick={() => redirectTo("/")}
        variant="ghost"
        textAlign="center"
        flex={1}
        _hover={{ backgroundColor: "transparent" }}
      >
        <HomeTab selected={isSelected("/")} />
      </Button>
      <Button
        onClick={() => redirectTo("/your-orders")}
        variant="ghost"
        textAlign="center"
        flex={1}
        _hover={{ backgroundColor: "transparent" }}
      >
        <OrdersTab selected={isSelected("/your-orders")} />
      </Button>
      <Button
        textAlign="center"
        variant="ghost"
        flex={1}
        _hover={{ backgroundColor: "transparent" }}
      >
        <ProfileTab selected={isSelected("/profile")} />
      </Button>
    </Flex>
  );
};
