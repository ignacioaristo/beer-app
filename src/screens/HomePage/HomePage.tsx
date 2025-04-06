import { Tabs } from "@chakra-ui/react";

export const HomePage = () => {
  return (
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
      <Tabs.Content value="new-taste">new-taste</Tabs.Content>
      <Tabs.Content value="members">Manage your team members</Tabs.Content>
      <Tabs.Content value="projects">Manage your projects</Tabs.Content>
    </Tabs.Root>
  );
};
