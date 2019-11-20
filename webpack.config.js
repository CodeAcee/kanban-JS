const path = require('path');

module.exports = {
  mode: 'development',
  devtool: '(none)',
  entry: './js/main.js',
  output: {
    path: `${__dirname}/dist/`,
    filename: 'app.js',
  },
  watch: false,
  devServer: {
    contentBase: `${__dirname}/dist/`
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
        }
      }
    ],
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, '/')],
    extensions: [".js", ".json", ".jsx", ".css"]
  }
};