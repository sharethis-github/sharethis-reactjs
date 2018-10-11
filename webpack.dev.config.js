
// dependencies
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

// configuration
var configuration = {
  entry: './demo/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
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
    publicPath: '',
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
