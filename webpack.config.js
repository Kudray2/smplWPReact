const path = require("path")
// билблиотека для поддержки html
const HtmlWebpackPlugin = require("html-webpack-plugin")
// плагин для очистки неиспользуемых кэшей webpack
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

// Основной раздел
module.exports = {
  mode: "development",
  entry: { index: path.resolve(__dirname, "src", "index.jsx") },
  output: {
    path: path.resolve(__dirname, "distr"),
    // используем запись с "[]" для работы  html и clean plugins
    filename: "[name].[hash].js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx)/,
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
