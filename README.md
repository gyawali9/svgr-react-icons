# svgr-react-icons

[![npm](https://img.shields.io/npm/v/svgr-react-icons)](https://www.npmjs.com/package/svgr-react-icons)
[![downloads](https://img.shields.io/npm/dm/svgr-react-icons)](https://www.npmjs.com/package/svgr-react-icons)
[![license](https://img.shields.io/npm/l/svgr-react-icons)](https://www.npmjs.com/package/svgr-react-icons)

A **lightweight and flexible React SVG icon library** with customizable size and color. Import SVGs directly as React components (via SVGR) or load them dynamically from URLs. Works seamlessly with **Vite, Next.js, CRA, and Node.js** thanks to dual ESM + CJS outputs.

> **Note:** This package replaces [`svg-icon-package@1.0.1`](https://www.npmjs.com/package/svg-icon-package). The old package is now deprecated. Please migrate to `svgr-react-icons`.

---

## ✨ Features

- 🎨 **Customizable** — control icon size and fill color
- ⚡ **Dual usage** — import as React components or load from URLs
- 🔒 **Safe by default** — sanitizes SVGs with `dompurify`
- 📦 **Compatible everywhere** — ships **ESM** (`import`) and **CJS** (`require`)

---

## 📦 Installation

```bash
yarn add svgr-react-icons dompurify
yarn add --dev vite-plugin-svgr
```

- `svgr-react-icons` → the icon library
- `dompurify` → sanitizes dynamic SVGs
- `vite-plugin-svgr` → enables importing SVGs as React components

---

## 🚀 Quick Start

## 1. Configure Vite / Next.js

### Configure Vite

`vite.config.ts`

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: { icon: true, exportType: "default" },
      include: "**/*.svg?react",
    }),
  ],
});
```

### Configure Next.js

`next.config.ts`

```ts
import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};
export default nextConfig;
```

### 2. Add an SVG file

`src/assets/my-icon.svg`

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <circle cx="12" cy="12" r="10" />
</svg>
```

---

## 🔧 Usage Examples

### Example 1 — Importing SVGs as React Components (SVGR)

```tsx
import React from "react";
import { Icon } from "svgr-react-icons"; // ESM import
import MyIcon from "./assets/my-icon.svg?react";

export default function App() {
  return <Icon src={MyIcon} size={32} fill="blue" alt="Blue Circle" />;
}
```

📦 **CommonJS alternative (Node / Jest / older setups)**:

```js
const { Icon } = require("svgr-react-icons");
const MyIcon = require("./assets/my-icon.svg?react");

function App() {
  return <Icon src={MyIcon} size={32} fill="blue" alt="Blue Circle" />;
}
```

---

### Example 2 — Loading SVGs from a URL

```tsx
import React from "react";
import { Icon, generateSvgUrl } from "svgr-react-icons";

export default function App() {
  return (
    <Icon
      src={generateSvgUrl("/assets/my-icon.svg")}
      size={48}
      fill="red"
      isUrl
      alt="Red Circle"
    />
  );
}
```

---

## 📑 Icon Component Props

| Prop    | Type                              | Description                            | Default |
| ------- | --------------------------------- | -------------------------------------- | ------- |
| `src`   | `React.ComponentType` or `string` | SVG component (SVGR) or URL string     | —       |
| `size`  | `number`                          | Icon size in pixels (width and height) | `24`    |
| `fill`  | `string`                          | Fill color (e.g., `blue`, `#ff0000`)   | —       |
| `isUrl` | `boolean`                         | Set to `true` for URL-based SVGs       | `false` |
| `alt`   | `string`                          | Accessibility alt text                 | —       |

---

## 🛠 Development & Contributing

Clone and run locally:

```bash
git clone https://github.com/gyawali9/svgr-react-icons.git
cd svgr-react-icons
yarn install
yarn build
yarn test
```

Run example app:

```bash
cd example
yarn dev
```

Open <http://localhost:5173>

---

## 📜 License

[MIT](./LICENSE) © 2025 [Roshan Gyawali](https://github.com/gyawali9)
