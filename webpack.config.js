const path = require('path')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const webpack = require('webpack')

const js = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-react', '@babel/preset-env'],
      plugins: ['@babel/plugin-proposal-class-properties']
    }
  }
}

const plugins = [
  new FriendlyErrorsWebpackPlugin()
]

module.exports = {
  devtool: 'source-map',
  mode: process.env.MODE === 'dev' ? 'development' : 'production',
  target: 'web',
  context: path.join(__dirname, 'src'),
  entry: {
    app: './index.js',
  },
  resolve: {
    modules: [
      path.resolve('./src'),
      'node_modules',
    ],
  },
  module: {
    rules: [js]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].bundle.js',
  },
  plugins
}