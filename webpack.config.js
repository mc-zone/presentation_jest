const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
    filename: "main-[chunkhash].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        oneOf: [
          {
            resourceQuery: /\?raw/,
            use: "raw-loader"
          },
          {
            loader: "babel-loader",
            options: {
              presets: [
                ["@babel/preset-env", { modules: false }],
                "@babel/preset-react"
              ]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },

      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)$/,
        use: [
          {
            loader: "file-loader"
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      title: "React Conf"
    })
  ]
};
