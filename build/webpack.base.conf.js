var path = require('path')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './example/main.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'index.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        enforce: "pre",
        include: [resolve('example'), resolve('src')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('./src'), resolve('./example')]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ]
  }
}
