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
