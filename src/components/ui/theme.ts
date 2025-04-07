import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  theme: {
    breakpoints: {
      sm: "450px",
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
