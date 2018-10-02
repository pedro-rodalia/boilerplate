const path = require("path");

var BUILD_DIR = path.resolve(__dirname, './public/dist');
var APP_DIR = path.resolve(__dirname, './src');

const config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      }
    ]
  }
};

module.exports = config;
