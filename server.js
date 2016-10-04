/*eslint no-console:0 */
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var open = require('open');
var path = require('path');

var config = require('./webpack/dev.config');

new WebpackDevServer(webpack(config), config.devServer)
.listen(config.port, '0.0.0.0', function(err) {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:' + config.port);
  console.log('Opening your system browser...');
  const publicPath = config.output.publicPath;
  const url = path.join('http://localhost:' + config.port + '/' + publicPath);
  open(url);
});
