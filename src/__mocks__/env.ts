jest.mock("@/env", () => ({
  env: {
    VITE_FIREBASE_API_KEY: "mock-api-key",
    VITE_FIREBASE_AUTH_DOMAIN: "mock-auth-domain",
    VITE_FIREBASE_PROJECT_ID: "mock-project-id",
    VITE_FIREBASE_STORAGE_BUCKET: "mock-storage",
    VITE_FIREBASE_MESSAGING_SENDER_ID: "mock-sender-id",
    VITE_FIREBASE_APP_ID: "mock-app-id",
  },
}));
