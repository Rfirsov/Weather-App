const path = require('path')
const webpack = require('webpack')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const srcDir = path.resolve(__dirname, 'src')
const distDir = path.resolve(__dirname, 'dist')

module.exports = {
  context: srcDir,
  entry: "./index.js",
  output: {
    path: distDir,
    publicPath: '/',
    filename: 'bundle.js'
  },
   devServer: {
    contentBase: distDir,
    historyApiFallback: true,
    port: 3000,
    compress: true,
    inline: false
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
        test: /\.(jpg|png|gif)$/,
        use: 'file-loader'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
         loader: 'url-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new ExtractTextPlugin('bundle.css'),
    new webpack.optimize.UglifyJsPlugin({sourceMap: false}),
  ]
}
