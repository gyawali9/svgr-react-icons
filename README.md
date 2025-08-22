# svg-icon-package

A simple and lightweight React package for displaying SVG icons with customizable size and color. Easily use SVGs as React components (via SVGR) or load them dynamically from URLs. Perfect for Vite and React projects!

## Why Use This Package?

- **Customizable Icons**: Adjust size and fill color of SVGs.
- **Two Ways to Use**: Import SVGs as React components or load them from URLs.
- **Secure**: Sanitizes SVG content using `dompurify`.
- **Lightweight**: Minimal dependencies, optimized for Vite.

## Prerequisites

Before using `svg-icon-package`, ensure you have:

- Node.js (version 16 or higher)
- React (version 18 or 19)
- A Vite-based React project
- An SVG file to use as an icon

## Installation

Install the package and required dependencies:

```bash
yarn add svg-icon-package dompurify
yarn add --dev vite-plugin-svgr
```

- `svg-icon-package`: The main package.
- `dompurify`: Ensures safe SVG rendering.
- `vite-plugin-svgr`: Enables importing SVGs as React components.

## Quick Start

Follow these steps to use `svg-icon-package` in your Vite React project.

### Step 1: Configure Vite

To use SVGs as React components, add `vite-plugin-svgr` to your Vite configuration.

Create or update `vite.config.ts` in your project root:

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true,
        exportType: "default",
      },
      include: "**/*.svg?react",
    }),
  ],
});
```

### Step 2: Add an SVG File

Create an SVG file in your project (e.g., `src/assets/my-icon.svg`):

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
</svg>
```

This SVG displays a simple circle and will be used in the examples below.

### Step 3: Use the Icon Component

The `svg-icon-package` provides an `Icon` component and a `generateSvgUrl` utility. Here are two ways to use it.

#### Example 1: Using an SVG as a React Component (SVGR)

Import your SVG as a React component and render it with the `Icon` component.

```tsx
import React from "react";
import { Icon } from "svg-icon-package";
import MyIcon from "./assets/my-icon.svg?react";

function App() {
  return (
    <div>
      <h1>My SVG Icon</h1>
      <Icon src={MyIcon} size={32} fill="blue" alt="Blue Circle Icon" />
    </div>
  );
}

export default App;
```

- **What it does**: Renders the SVG as a React component with a size of 32px and a blue fill color.
- **Output**: A blue circle icon, 32x32 pixels.

#### Example 2: Loading an SVG from a URL

Use `generateSvgUrl` to create a URL with size and color parameters, then render it dynamically.

```tsx
import React from "react";
import { Icon, generateSvgUrl } from "svg-icon-package";

function App() {
  return (
    <div>
      <h1>My SVG Icon from URL</h1>
      <Icon
        src={generateSvgUrl("/assets/my-icon.svg", { size: 48, fill: "red" })}
        size={48}
        fill="red"
        isUrl
        alt="Red Circle Icon"
      />
    </div>
  );
}

export default App;
```

- **What it does**: Loads the SVG from a URL with query parameters (`?size=48&fill=red`) and renders it with a red fill color and 48px size.
- **Output**: A red circle icon, 48x48 pixels.

### Icon Component Props

The `Icon` component accepts the following props:

| Prop    | Type                              | Description                            | Default |
| ------- | --------------------------------- | -------------------------------------- | ------- |
| `src`   | `React.ComponentType` or `string` | SVG component (SVGR) or URL string     | -       |
| `size`  | `number`                          | Icon size in pixels (width and height) | 24      |
| `fill`  | `string`                          | Fill color (e.g., `blue`, `#ff0000`)   | -       |
| `isUrl` | `boolean`                         | Set to `true` for URL-based SVGs       | `false` |
| `alt`   | `string`                          | Accessibility alt text                 | -       |

## Try It Out

To see the package in action:

1. Create a new Vite React project:
   ```bash
   yarn create vite my-app --template react-ts
   cd my-app
   yarn install
   ```
2. Install dependencies:
   ```bash
   yarn add svg-icon-package dompurify
   yarn add --dev vite-plugin-svgr
   ```
3. Follow the setup and examples above.
4. Run the app:
   ```bash
   yarn dev
   ```
   - Open `http://localhost:5173` to see your icons.

## Development

To contribute or test locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/gyawali9/svg-icon-package.git
   cd svg-icon-package
   ```
2. Install dependencies:
   ```bash
   yarn install
   ```
3. Run the example app:
   ```bash
   cd example
   yarn dev
   ```
   - Open `http://localhost:3000` to see the demo.
4. Run tests:
   ```bash
   yarn test
   ```

## Contributing

We welcome contributions! Please:

- Open an issue at `https://github.com/gyawali9/svg-icon-package/issues`.
- Submit a pull request with your changes.

## License

MIT License. See [LICENSE](LICENSE) for details.

## Links

- npm: https://www.npmjs.com/package/svg-icon-package
- GitHub: https://github.com/gyawali9/svg-icon-package
- Author: Roshan Gyawali (gyawali9)
