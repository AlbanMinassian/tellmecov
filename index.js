module.exports = process.env.TELLMECOV
  ? require('./lib-cov/tellmecov')
  : require('./lib/tellmecov');
