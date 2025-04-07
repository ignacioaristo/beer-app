import { Flex, Tabs, Text } from "@chakra-ui/react";
import { NewTaste } from "./NewTaste/NewTaste";
import { MainLayout } from "../Layouts/MainLayout/MainLayout";

export const HomePage = () => {
  return (
    <MainLayout>
      <Flex justifyContent="center">
        <Tabs.Root defaultValue="new-taste">
          <Tabs.List>
            <Tabs.Trigger value="new-taste">
              <Text>New Taste</Text>
            </Tabs.Trigger>
            <Tabs.Trigger value="popular">
              <Text>Popular</Text>
            </Tabs.Trigger>
            <Tabs.Trigger value="recommended">
              <Text>Recommended</Text>
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
