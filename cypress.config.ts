import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    pageLoadTimeout: 10000,
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
