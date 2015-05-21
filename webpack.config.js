var webpack = require('webpack');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var path = require('path');

module.exports = {
  entry: {
    vendor: ['handlebars'],
    'bundle-with-hbs': './src/index.js',
    'no-hbs': './src/a.js',
    'with-hbs': './src/b.js'
  },

  output: {
    filename: '[name].js',
    path: path.resolve('./dist')
  },

  module: {
    loaders: [
      { test: /\.hbs$/, loader: 'handlebars-loader' }
    ]
  },

  plugins: [
    new CommonsChunkPlugin({
      name: 'vendor',
      filename: 'commons.js',
      minChunks: 0
    })
  ],

  node: {
    fs: 'empty'
  }
};
