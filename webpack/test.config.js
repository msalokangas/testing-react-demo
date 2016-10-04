const path = require('path');
const srcPath = path.join(__dirname, '/../src');

module.exports = {
  output: {
    libraryTarget: 'commonjs2',
  },
  module: {
    loaders: [],
  },
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
};
