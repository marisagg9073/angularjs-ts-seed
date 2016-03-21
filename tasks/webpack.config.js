var path = require('path');
var webpack = require('webpack');

// https://webpack.github.io/docs/code-splitting.html
var angular = ['aria', 'animate', 'messages', 'material',
  'ui-router', 'cookies', 'sanitize', 'nvd3'].map(function(dep) {
    return 'angular-' + dep;
  });
module.exports = {
  entry: {
    angular: ['angular'].concat(angular),
    vendor: ['d3'],
    at: './app/at-angular*.ts',
    app: './app/app.ts',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '..', 'dist'),
    publicPath: '/dev/',
  },
  // devtool: 'inline-source-map',
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js'],
    // alias: {
    //   at: 'at.bundle.js'
    // }
  },
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin('common.js'),
    // new webpack.optimize.CommonsChunkPlugin({ names: ['at', 'angular', 'vendor'] }),
    // new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    // new webpack.optimize.CommonsChunkPlugin('angular', 'angular.bundle.js')
    // new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.ts$/,
        include: [
          path.resolve(__dirname, '..', 'app')
        ],
        loader: 'ts-loader'
      },
      { test: /[\/]angular\.js$/, loader: 'exports?angular' }
    ]
  }
};
