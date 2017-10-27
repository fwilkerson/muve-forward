const {resolve} = require('path');
const MinifyPlugin = require('babel-minify-webpack-plugin');

module.exports = {
  entry: resolve(__dirname, 'src', 'main.js'),

  devtool: 'source-map',

  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'public', 'static', 'js'),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['env', {modules: false}]],
            plugins: [
              ['transform-react-jsx', {pragma: 'h', useBuiltIns: true}],
            ],
            compact: true,
          },
        },
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [new MinifyPlugin()],
};
