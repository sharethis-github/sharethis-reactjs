
// dependencies
const HtmlWebPackPlugin = require("html-webpack-plugin");
const nib = require('nib');
const path = require('path');

// configuration
configuration = {
  entry: './demo/index.js',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        exclude: /node_modules/
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.styl/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'stylus-loader',
            options: {
              use: [nib()]
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      }
    ]
  },
  output: {
    publicPath: '/'
  },
  resolve: {
    alias: {'sharethis-reactjs': path.resolve('./src')},
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./demo/index.html",
      filename: "index.html"
    })
  ],
  devServer: {
    open: false,
    host: '0.0.0.0',
    port: 5000,
    disableHostCheck: true
  }
};

// export
module.exports = configuration;
