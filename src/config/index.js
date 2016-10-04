const env = process.env.DEMO_ENV || 'development';
const configFilename = `_${env}`;
const config = require(`./${configFilename}`).default;
export default config;
