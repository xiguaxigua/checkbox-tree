var webpack = require('webpack')
var merge = require('webpack-merge')
var path = require('path')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var opn = require('opn')
var port = '8092'

opn('http://localhost:' + port)
module.exports = merge(baseWebpackConfig, {
  devtool: '#source-map',
  devServer: {
    port: port,
    hot: true,
    contentBase: path.join(__dirname, "dist"),
    stats: "errors-only"
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': '"development"'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './example/index.html',
      inject: true
    })
  ]
})
