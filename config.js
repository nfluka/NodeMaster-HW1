/**
 * Holds all configurations
 */

const config = {};

config.dev = {
  'httpPort' : 3000,
  'envName' : 'dev',
  'secret' : 'j8455BtKFs3Jcq2ohSP3'
};

config.production = {
  'httpPort' : 3001,
  'envName' : 'production',
  'secret' : 'j8455BtKFs3Jcq2ohSP3'
};

const currENV = typeof process.env.NODE_ENV === 'string' ?
  process.env.NODE_ENV.toLowerCase() :
  process.env.NODE_ENV = '';

const envToExport = typeof config[currENV] === 'object' ? config[currENV] : config.dev;

module.exports = envToExport;