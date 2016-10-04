var path = require('path');
var port = 8000;
var srcPath = path.join(__dirname, '/../src');
var autoprefixer = require('autoprefixer');

// https://webpack.github.io/docs/configuration.html
module.exports = {
  port: port,
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      actions: srcPath + '/actions/',
      constants: srcPath + '/constants/',
      core: srcPath + '/core/',
      stores: srcPath + '/stores/',
      styles: srcPath + '/styles/',
      features: srcPath + '/features/',
      images: srcPath + '/images/'
    }
  },
  externals: {},
  eslint: {
    quiet: false,
    failOnWarning: false,
    failOnError: true
  },
  module: {
    preLoaders: [
      { test: /\.js$/,
        loader: 'eslint',
        exclude: /node_modules/
      }
    ],
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.(png|jpg|jpeg|gif|svg)$/, loader: 'url?limit=8192' },
      { test: /\.json$/, loader: 'json' },
      { test: /\.(woff|woff2)$/, loader: 'url-loader?limit=100000' },
      { test: /\.(ttf|eot)$/, loader: 'file-loader' }
    ]
  },
  postcss: [autoprefixer({ browsers: ['last 2 Chrome versions'] })]
};
