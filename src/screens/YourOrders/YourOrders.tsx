import { MainLayout } from "../Layouts/MainLayout/MainLayout";
import { Flex, Tabs, Text } from "@chakra-ui/react";
import { InProgress } from "./InProgress/InProgress";
import { PastOrders } from "./PastOrders/PastOrders";
import { toaster, Toaster } from "@/components/ui/toaster";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

type LocationState = {
  orderCreated?: boolean;
};
export const YourOrders = () => {
  const location = useLocation<LocationState>();

  const { orderCreated } = location.state || false;

  useEffect(() => {
    if (orderCreated) {
      toaster.create({
        title: `Item added successfully to your order`,
        type: "success",
        duration: 3000,
      });
    }
  }, [orderCreated]);

  return (
    <MainLayout>
      <Toaster />
      <Flex justifyContent="center">
        <Tabs.Root defaultValue="in-progress" w="100%" justifyItems="center">
          <Tabs.List>
            <Tabs.Trigger value="in-progress">
              <Text>In Progress</Text>
            </Tabs.Trigger>
            <Tabs.Trigger value="past-orders">
              <Text>Past Orders</Text>
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="in-progress">
            <InProgress />
          </Tabs.Content>
          <Tabs.Content value="past-orders">
            <PastOrders />
          </Tabs.Content>
        </Tabs.Root>
      </Flex>
    </MainLayout>
  );
};
