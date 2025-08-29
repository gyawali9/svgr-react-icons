import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { viteStaticCopy } from "vite-plugin-static-copy";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        exportType: "default",
        icon: true,
      },
      include: "**/*.svg?react",
    }),
    viteStaticCopy({
      targets: [
        {
          src: "src/assets/*",
          dest: "assets",
          transform: (content) => {
            return content;
          },
        },
      ],
    }),
  ],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "svgr-react-icons": path.resolve(__dirname, "../src"),
    },
  },
});
