const path = require("path")
// билблиотека для поддержки html
const HtmlWebpackPlugin = require("html-webpack-plugin")

// Основной раздел
module.exports = {
  entry: { index: path.resolve(__dirname, "src", "index.js") },
  output: { path: path.resolve(__dirname, "build") },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },

      {
        test: /\.js$/,
        use: ["babel-loader"],
      },
      {
        test: /\.jsx$/,
        use: ["babel-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
  ],
}