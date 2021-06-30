const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: "./src/application/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
        '@Pages': path.resolve(__dirname, './src/pages/'),
        '@Common': path.resolve(__dirname, './src/common/'),
        '@Application': path.resolve(__dirname, './src/application/'),
        '@Assets': path.resolve(__dirname, './public/assets/'),
      },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.(css)$/,
        use: {
          loader: "file-loader",
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
            {
        test: /\.(jpg|jpeg|gif|png|mp4)$/,
        exclude: /node_modules/,
        loader: 'file-loader',
      },
    ],
  },
};