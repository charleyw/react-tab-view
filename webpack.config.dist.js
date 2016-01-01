/* jshint node: true */
var path = require('path');


module.exports = {
  context: path.join(__dirname),
  entry: './src/index.jsx',

  output: {
    path: path.join(__dirname),
    filename: 'react-tab-view.js',
    libraryTarget: 'umd',
    library: 'ReactTabView'
  },

  externals: {
   'react': 'var React',
   'react/addons': 'var React'
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /(\.js)|(\.jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          optional: ['runtime'],
          stage: 0
        }
      }
    ]
  }
};
