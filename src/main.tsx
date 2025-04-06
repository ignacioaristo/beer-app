import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { system } from "./components/ui/theme.ts";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./app/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <ChakraProvider value={system}>
        <App />
      </ChakraProvider>
    </ReduxProvider>
  </StrictMode>
);
