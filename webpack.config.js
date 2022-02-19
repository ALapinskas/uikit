const path = require('path');

module.exports = {
  entry: { 
    "uikit": './src/index.js',
    "testapp": './test/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].min.js',
    libraryTarget: 'umd',
  },/*
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },*/
  devServer: {
    static: [
      {
        directory: path.join(__dirname, 'dist')
      },
      {
        directory: path.join(__dirname, 'test')
      }
    ],
    compress: true,
    port: 9000,
    client: {
      overlay: false,
    },
  }
};