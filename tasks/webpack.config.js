var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: './app/app.ts',
    at: './app/at-angular.ts'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '..', 'dist'),
    publicPath: '/dev/',
  },
  // devtool: 'inline-source-map',
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.ts$/,
        include: [
          path.resolve(__dirname, '..', 'app')
        ],
        loader: 'ts-loader'
      }
    ]
  }
};
