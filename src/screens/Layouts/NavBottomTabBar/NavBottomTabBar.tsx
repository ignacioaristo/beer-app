import { HomeTab } from "@/assets/svg/HomeTab";
import { OrdersTab } from "@/assets/svg/OrdersTab";
import { Flex, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

// type NavigationProps = {
//   name: TabSelection;
//   redirectTo: string;
//   icon: React.ReactNode;
// };
type TabSelection = "home" | "orders" | "profile";

export const NavBottomTabBar = () => {
  const history = useHistory();
  const [tabSelected, setTabSelected] = useState<TabSelection | null>(null);

  const redirectTo = (path: string, pathName: TabSelection) => {
    history.push(path);

    if (tabSelected !== pathName) {
      setTabSelected(pathName);
    }
  };

  // const navigations: NavigationProps[] = [
  //   {
  //     name: "home",
  //     redirectTo: "/",
  //     icon: <HomeTab selected={tabSelected === "home"} />,
  //   },
  //   {
  //     name: "orders",
  //     redirectTo: "/your-orders",
  //     icon: <OrdersTab selected={tabSelected === "orders"} />,
  //   },
  //   {
  //     name: "profile",
  //     redirectTo: "/",
  //     icon: <HomeTab selected={tabSelected === "home"} />,
  //   },
  // ];

  return (
    <Flex position="static" justifyContent="space-around" py={4}>
      {/* {navigations.map((nav, i) => (
        <Button
          key={i}
          onClick={() => redirectTo(nav.redirectTo, nav.name)}
          variant="plain"
          textAlign="center"
          flex={1}
        >
          {nav.icon}
        </Button>
      ))} */}
      <Button
        onClick={() => redirectTo("/", "home")}
        variant="ghost"
        textAlign="center"
        flex={1}
      >
        <HomeTab selected={tabSelected === "home"} />
      </Button>
      <Button
        onClick={() => redirectTo("your-orders", "orders")}
        variant="ghost"
        textAlign="center"
        flex={1}
      >
        <OrdersTab selected={tabSelected === "orders"} />
      </Button>
      <Button variant="ghost" textAlign="center" flex={1}>
        OPT 1
      </Button>
    </Flex>
  );
};
