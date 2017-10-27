const {resolve} = require('path');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const rootDir = resolve(__dirname, '..');

module.exports = {
  entry: resolve(rootDir, 'src', 'main.js'),

  devtool: 'source-map',

  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: resolve(rootDir, 'public'),
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
              'transform-object-rest-spread',
              'dynamic-import-webpack',
            ],
            compact: true,
          },
        },
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new MinifyPlugin(),
    new HTMLWebpackPlugin({
      filename: resolve(rootDir, 'public', 'index.html'),
      template: resolve(rootDir, 'src', 'index.html'),
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        html5: true,
        minifyCSS: true,
        removeComments: true,
        removeEmptyAttributes: true,
      },
    }),
  ],
};
