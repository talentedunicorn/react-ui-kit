const path = require('path')

module.exports = {
  devServer: {
    contentBase: [
      path.join(__dirname, 'public'),
      path.join(__dirname, 'dist')
    ],
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
}
