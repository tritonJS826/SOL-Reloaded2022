const path = require('path');
require('dotenv').config({path: path.resolve(__dirname, '../.env')});
const NodemonPlugin = require('nodemon-webpack-plugin');

const nodeExternals = require('webpack-node-externals');

const NODE_ENV = process.env.NODE_ENV;

module.exports = {
  entry: './src/index.ts',
  mode: NODE_ENV,
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  externals: [ nodeExternals() ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          'ts-loader',
        ]
      }
    ]
  },
  watch: NODE_ENV === 'development',
  plugins: [
    new NodemonPlugin()
  ]
}