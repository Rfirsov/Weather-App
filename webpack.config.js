var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    'babel-polyfill',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        loader: ['eslint-loader'],
        include: [
          path.resolve(__dirname, "src"),
        ],
      },
      {
        test: /\.js$/,
        loader: ['react-hot-loader', 'babel-loader'],
        include: [
          path.resolve(__dirname, "src"),
        ],
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
            use: 'css-loader'
        })
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('styles.css'),
  ]
}
