var path = require('path');
var webpack = require('webpack');
var _ = require('lodash');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var baseConfig = require('./base.config');
var args = require('minimist')(process.argv.slice(2));
var folder = (args.env === 'dist') ? args.env :  'dist-' + args.env;
var outputPath = path.join(__dirname, '/../' + folder + '/assets');
// var baseHref = (args.env === 'pr') ? '/' : '/jumpstart/';
var baseHref = '/';

// TODO: import all HtmlWebpackPlugin configs
// TODO: write helper which replaces material-ui with hand picked components
var config = _.merge({
  entry: {
    app: path.join(__dirname, '../src/client'),
    vendor: [
      'bluebird',
      'react',
      'react-addons-css-transition-group',
      'react-dom',
      'react-interpolate-component',
      'react-redux',
      'react-router',
      'react-router-redux',
      'react-tap-event-plugin',
      'redux',
      'redux-thunk',
      'redux-logger',
      'history',
      'superagent',
      'lodash',
    ]
  },
  output: {
    path: outputPath,
    filename: '[name].js?[chunkhash]',
    chunkFilename: '[name].js?[chunkhash]',
    publicPath: 'assets/',
    sourceMapFilename: 'debugging/[name].map'
  },
  cache: false, // TODO: ?
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './index_template.ejs',
      title: 'React Demo',
      appMountId: 'app',
      filename: '../index.html',
      inject: false,
      chunksSortMode: 'none',
      baseHref
    }),
    new ExtractTextPlugin('styles.css', { allChunks: true }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.DefinePlugin({
      'process.env': {
          NODE_ENV: JSON.stringify('production'),
          JUMPSTART_ENV: JSON.stringify(args.env)
        }
    }),
    new webpack.DefinePlugin({
      __DEVELOPMENT__: false,
      __DEVTOOLS__: false
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      comments: false,
      compress: {
        warnings: false,
        drop_console: true
      }
    }),
    new webpack.NoErrorsPlugin()
  ]
}, baseConfig);

config.module.loaders.push({
  test: /\.(js|jsx)$/,
  loader: 'babel',
  include: path.join(__dirname, '/../src')
});

// TODO: check these 2 loaders
config.module.loaders.push({
  test: /(item|custom)\.scss/,
  loader: ExtractTextPlugin.extract('style', 'css!sass?outputStyle=expanded')
});


/*
config.module.loaders.push({
  test: /\.scss$/,
  loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!postcss!sass?outputStyle=expanded&sourceMap'),
  exclude: /(item|custom)\.scss$/
});
*/

module.exports = config;
