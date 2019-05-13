const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  devServer: {
    contentBase: [
      path.join(__dirname, 'public'),
      path.join(__dirname, 'dist')
    ],
    hot: true,
    watchContentBase: true
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
  },
  plugins: [
    new CopyPlugin([
      { from: "public" }
    ])
  ]
}
