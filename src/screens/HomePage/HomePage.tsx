import { Flex, Tabs } from "@chakra-ui/react";
import { NewTaste } from "./NewTaste/NewTaste";
import { MainLayout } from "../Layouts/MainLayout/MainLayout";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { toaster, Toaster } from "@/components/ui/toaster";

type LocationState = {
  paymentSuccess?: boolean;
};

export const HomePage = () => {
  const location = useLocation<LocationState>();

  const { paymentSuccess } = location.state || false;

  useEffect(() => {
    if (paymentSuccess) {
      toaster.create({
        title: `Order payment was successful`,
        type: "success",
        duration: 3000,
      });
    }
  }, [paymentSuccess]);

  return (
    <MainLayout>
      <Toaster />
      <Flex justifyContent="center">
        <Tabs.Root defaultValue="new-taste">
          <Tabs.List>
            <Tabs.Trigger value="new-taste">
              <p>New Taste</p>
            </Tabs.Trigger>
            <Tabs.Trigger value="popular">
              <p>Popular</p>
            </Tabs.Trigger>
            <Tabs.Trigger value="recommended">
              <p>Recommended</p>
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="new-taste">
            <NewTaste />
          </Tabs.Content>
          <Tabs.Content value="members">Manage your team members</Tabs.Content>
          <Tabs.Content value="projects">Manage your projects</Tabs.Content>
        </Tabs.Root>
      </Flex>
    </MainLayout>
  );
};
