const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  plugins: [
    new CopyPlugin({
      patterns: [
        'node_modules/todomvc-app-css/index.css',
      ]
    }),
    new HtmlWebpackPlugin()
  ]
}
