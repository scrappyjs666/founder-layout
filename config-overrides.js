const { alias } = require('react-app-rewire-alias');

module.exports = function override(config, env) {
  alias({
    '@components': 'src/components',
    '@api': 'src/api',
    '@styles': 'src/styles',
  })(config);

  return config;
};
