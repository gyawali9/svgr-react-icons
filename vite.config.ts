import { defineConfig, PluginOption } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react() as PluginOption,
    svgr({
      svgrOptions: {
        exportType: "default",
        icon: true, // Preserves width/height as 1em for icons
      },
      include: "**/*.svg?react", // Ensure SVGR processes all SVG files
    }) as PluginOption,
  ],
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "SvgIconPackage",
      fileName: "svg-icon-package",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          dompurify: "DOMPurify",
        },
      },
    },
  },
});
