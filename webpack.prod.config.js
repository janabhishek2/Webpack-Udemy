const path = require("path");
const MiniCssExtractplugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    "hello-world": "./src/HelloWorld.js",
    kiwi: "./src/kiwi.js",
    abhishek: "./src/abhishek.js",
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "",
  },
  mode: "production",
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  module: {
    rules: [
      { test: /\.(ttf)$/, type: "asset/resource" },

      {
        test: /\.(jpg|png)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 1 * 1024, // 7Kb max size
          },
        },
      },
      {
        test: /\.(txt)$/,
        type: "asset/source",
      },
      {
        test: /\.(css)$/,
        use: [MiniCssExtractplugin.loader, "css-loader"],
      },
      {
        test: /\.(scss)$/,
        use: [MiniCssExtractplugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(hbs)$/,
        use: ["handlebars-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractplugin({
      filename: "[name].[contenthash].css",
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "hello-world.html",
      title: "Hello World",
      chunks: ["hello-world"],
      template: "src/index.hbs",
      description: "Hello World",
      minify: "false",
    }),
    new HtmlWebpackPlugin({
      filename: "kiwi.html",
      chunks: ["kiwi"],
      title: "Kiwi",
      template: "src/index.hbs",
      description: "Kiwi",
      minify: true,
    }),
    new HtmlWebpackPlugin({
      filename: "abhishek.html",
      chunks: ["abhishek"],
      title: "abhishek",
      template: "src/index.hbs",
      description: "Hello Abhishek",
      minify: false,
    }),
  ],
};
