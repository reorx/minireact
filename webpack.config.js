const webpack = require('webpack')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path')
const rootDir = __dirname
const srcDir = path.join(rootDir, 'src')
const destDir = path.join(rootDir, 'build')

const isDevelopment = process.env.NODE_ENV !== 'production'
const useAnalyze = !!process.env.WEBPACK_USE_ANALYZE


let config = {
  entry: {
    index: path.join(srcDir, 'index.tsx'),
  },
  output: {
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
    new webpack.DefinePlugin({
      'process.env.APP_ENV': JSON.stringify(process.env.APP_ENV),
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(rootDir, 'public/index.html'),
    })
  ],
}



if (useAnalyze) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

  config.mode = 'development'
  config.plugins.push(
    new BundleAnalyzerPlugin({
      analyzerPort: 18888,
    })
  )
} else if (isDevelopment) {
  Object.assign(config, {
    devtool: 'cheap-module-source-map',
    mode: 'development',
    devServer: {
      host: '127.0.0.1',
      port: 3000,
      hot: true,
      historyApiFallback: true,
      // allowedHosts: [],
    },
  })
} else {
  Object.assign(config, {
    mode: 'production',
    optimization: {
      minimize: true,
    }
  })
}

module.exports = config
