const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  plugins: [
    new CopyPlugin({
      patterns: [
        'node_modules/todomvc-app-css/index.css',
        { from: 'icons/192.png', to: './apple-touch-icon.png' },
        { from: './icons/', to: './icons/' },
        'manifest.json'
      ]
    }),
    new HtmlWebpackPlugin(),
    new WorkboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
  devtool: 'source-map'
}
