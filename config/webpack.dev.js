const {resolve} = require('path');
const HTMLWebpackPLugin = require('html-webpack-plugin');

const rootDir = resolve(__dirname, '..');

module.exports = {
  entry: resolve(rootDir, 'src', 'main.js'),

  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: resolve(rootDir, 'dist'),
    publicPath: '/',
  },

  context: resolve(rootDir, 'src'),

  devtool: 'inline-source-maps',

  devServer: {
    contentBase: resolve(rootDir, 'dist'),
    historyApiFallback: {
      disableDotRules: true,
    },
    publicPath: '/',
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
    new HTMLWebpackPLugin({
      template: resolve(rootDir, 'src', 'index.html'),
    }),
  ],
};
