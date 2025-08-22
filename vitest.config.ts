import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import type { PluginOption } from "vite";

export default defineConfig({
  plugins: [
    react() as PluginOption,
    svgr({
      svgrOptions: {
        icon: true,
        exportType: "default",
      },
      include: "**/*.svg?react",
    }) as PluginOption,
  ],
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    globals: true,
  },
  resolve: {
    alias: {
      "svg-icon-package": "/src",
      react: "/node_modules/react",
      "react-dom": "/node_modules/react-dom",
      "react/jsx-dev-runtime": "/node_modules/react/jsx-dev-runtime",
    },
  },
});
