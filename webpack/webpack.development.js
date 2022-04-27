const webpack = require('webpack')
const { merge } = require('webpack-merge')
const path = require('path')
const common = require('./webpack.common.js')
const rootDir = path.join(__dirname, '..')

const webpackConfig = merge(common, {
  // `eval` could not be used, see https://stackoverflow.com/questions/48047150/chrome-extension-compiled-by-webpack-throws-unsafe-eval-error
  devtool: 'cheap-module-source-map',
  mode: 'development',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.APP_ENV': JSON.stringify(process.env.APP_ENV),
    }),
  ],
  devServer: {
    host: '127.0.0.1',
    port: 3000,
    // Enable hot reloading
    hot: true,
  },
})

module.exports = webpackConfig
