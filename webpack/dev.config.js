var path = require('path');
var webpack = require('webpack');
var _ = require('lodash');
var baseConfig = require('./base.config');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var publicPath = '/';

var config = _.merge({
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:8000',
    'webpack/hot/only-dev-server',
    './src/client.js'
  ],
  output: {
    path: path.join(__dirname, '/../dist/assets'),
    filename: 'app.js',
    publicPath: publicPath
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    port: 8000,
    publicPath: publicPath,
    noInfo: false
  },
  cache: true,
  devtool: 'eval',
  plugins: [
    new HtmlWebpackPlugin({
      template: './index_template.ejs',
      title: 'demo',
      appMountId: 'app',
      filename: 'index.html',
      inject: false
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.OldWatchingPlugin(),
    new webpack.DefinePlugin({
      __DEVELOPMENT__: true,
      __DEVTOOLS__: false
    })
  ]
}, baseConfig);

// override base preLoaders for dev
config.module.preLoaders = [
  { test: /\.js$/,
  loader: 'eslint?{rules:{"no-restricted-syntax": ["off", "DebuggerStatement"], "no-debugger": "off", "no-console": "off"}}',
  exclude: /node_modules/
  }
];

// Add needed loaders
config.module.loaders.push({
  test: /\.(js|jsx)$/,
  loader: 'react-hot!babel-loader',
  include: path.join(__dirname, '/../src')
});

// TODO: check these 2 loaders
config.module.loaders.push({
  test: /(item|custom)\.scss/,
  loader: 'style!css!sass?outputStyle=expanded'
});

/*
config.module.loaders.push({
  test: /\.scss$/,
  loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!postcss!sass?outputStyle=expanded&sourceMap'
});
*/

module.exports = config;
