var path = require("path");
module.exports = {
  entry: {
    main:"./src/main.js"
  },
  output: {
    path: path.join(__dirname, 'assets'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {test: /\.js$/, loaders: ['babel-loader']}
    ]
  }
};