const webpack = require('webpack')
const CopyPlugin = require('copy-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path')
const rootDir = path.join(__dirname, '..')
const srcDir = path.join(rootDir, 'src')
const destDir = path.join(rootDir, 'build')

module.exports = {
  entry: {
    index: path.join(srcDir, 'index.tsx'),
  },
  output: {
    // path: path.join(destDir, 'static/js'),
    path: destDir,
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          projectReferences: true,
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [new TsconfigPathsPlugin()],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(rootDir, 'public/index.html'),
    })
    // new CopyPlugin({
    //   patterns: [{
    //     from: path.join(rootDir, 'public'),
    //     to: destDir
    //   }],
    // }),
  ],
}
