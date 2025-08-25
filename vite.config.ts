import { defineConfig, PluginOption } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    react() as PluginOption,
    svgr({
      svgrOptions: {
        exportType: "default",
        icon: true, // makes icons scalable with 1em width/height
      },
      include: "**/*.svg?react",
    }) as PluginOption,
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "SvgrReactIcons",
      formats: ["es", "cjs"], // ✅ dual outputs
      fileName: (format) =>
        format === "es" ? "svgr-react-icons.es.js" : "svgr-react-icons.cjs.js",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
