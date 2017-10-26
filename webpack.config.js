const path = require('path');
const webpack = require('webpack');
const IS_DEV = process.env.NODE_ENV === 'development';

module.exports = {
  entry: {
    index: './src/index.ts',
  },

  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist/',
  },

  devtool: IS_DEV ? 'inline-source-map' : '',

  module: {
    rules: [
      { test: /\.tsx?$/, use: 'awesome-typescript-loader', exclude: /node_modlues/ },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) },
    }),
  ],
  
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  }
};