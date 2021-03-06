const {join, resolve} = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const {GenerateSW} = require('workbox-webpack-plugin');

const rootDir = resolve(__dirname, '..');

module.exports = {
  mode: 'production',

  entry: resolve(rootDir, 'src', 'main.js'),

  output: {
    filename: '[name].[chunkhash].bundle.js',
    chunkFilename: '[name].[chunkhash].chunk.js',
    path: resolve(rootDir, 'build'),
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
    new CleanWebpackPlugin(['build'], {root: rootDir}),
    new CopyWebpackPlugin([
      {from: resolve(rootDir, 'public'), to: resolve(rootDir, 'build')},
    ]),
    new MinifyPlugin(),
    new HTMLWebpackPlugin({
      filename: resolve(rootDir, 'build', 'index.html'),
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
    new GenerateSW({
      globDirectory: resolve(rootDir, 'build'),
      globPatterns: ['**/*.{html,js,css}'],
      swDest: join(resolve(rootDir, 'build'), 'sw.js'),
    }),
  ],
};
