const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  mode: "development",
  devtool: "inline-source-map",
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images/',
              esModule: false,
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator : {
          filename : 'assets/fonts/[name][ext][query]',
        }
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'Todo List',
        template: './src/index.html',
        filename: './index.html', //relative to root of the application
        inject: false,
    })
 ] 
};