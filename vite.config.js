import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      events: "events/", // Use a polyfill for the `events` module
    },
  },
});
