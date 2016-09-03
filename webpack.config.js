const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    path.join(__dirname, './src/home.js'),
  ],
  output: {
    path: path.join(__dirname, './dist/'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        text: /.jsx$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: __dirname,
      },
      {
        test: /.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: __dirname,
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
        exclude: /node_modules/,
        include: __dirname,
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  stats: {
    colors: true, // Nice colored output
  },
};
