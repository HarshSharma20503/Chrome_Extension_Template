# CHROME EXTENSION TEMPLATE

CHROME_EXTENSION_TEMPLATE is a setup for creating Chrome extensions using React and Vite for rapid development and webpack for bundling background and content scripts. This template provides a streamlined development process and an organized project structure.

## Project Structure

- React with Vite: Used for building the extension's UI components.
- Webpack: Used for bundling background.js (service worker) and content-script.js (runs on all web pages).
- scripts:
  - background.js: Acts as a service worker.
  - content-script.js: Executes on all specified web pages.

## Getting Started

### Prerequisites

- Node.js
- npm
- Chrome extension development

### Installation

1. Clone the repository:

  ```bash
  git clone https://github.com/harshsharma20503/CHROME_EXTENSION_TEMPLATE.git

  cd CHROME_EXTENSION_TEMPLATE
  ```
  
2. Install dependencies:

```bash
npm install
```

### Building the Project

To build the project, run the following command:

```bash
npm run build-all
```

This command will:

1. Build the React components using Vite.
2. Bundle the background.js and content-script.js using webpack.

## Project Configuration

### manifest.json

The `manifest.json` file configures the Chrome extension, specifying permissions, background scripts, content scripts, and more. Key sections include:

1. Background Service Worker: background.js
2. Content Scripts: content-script.js
3. Web Accessible Resources: Specifies which resources are accessible from web pages.

```json
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    background: "./scripts/background.js",
    "content-script": "./scripts/content-script.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  resolve: {
    fallback: {
      path: require.resolve("path-browserify"),
    },
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "script/manifest.json", to: path.resolve(__dirname, "dist") },
        // Add more patterns if you need to copy other files or directories
      ],
    }),
  ],
};
```

## Loading the Extension in Chrome

1. Open Chrome and navigate to chrome://extensions/.
2. Enable "Developer mode" in the top right corner.
3. Click "Load unpacked" and select the dist folder of your project.

## Contributing

We welcome contributions to improve this project! Fork the repository, create a branch, make your changes, and open a pull request. For any issues or suggestions, please open an issue on GitHub.
