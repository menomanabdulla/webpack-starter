const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devServer: {
    contentBase: './dist'
  },
  module:{
    rules:[
      {
        test: '/\.js$/',
        use: [
          "babel-loader"
        ]
      },{
        test: '/\.scss$/',
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};