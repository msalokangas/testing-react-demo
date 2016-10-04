/* eslint-disable */
module.exports = (function(settings) {
  // TODO: export env variables
  settings.test_settings.browserstack.desiredCapabilities['browserstack.user'] =  process.env.BROWSERSTACK_USER || '';
  settings.test_settings.browserstack.desiredCapabilities['browserstack.key'] = process.env.BROWSERSTACK_KEY || '';
  return settings;
})(require('./nightwatch.json'));
