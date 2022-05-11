const { alias } = require('react-app-rewire-alias');

module.exports = function override(config, env) {
  alias({
    '@components': 'src/components',
    '@container': 'src/container',
    '@constants': 'src/constants',
    '@pages': 'src/pages',
    '@services': 'src/services',
    '@utils': 'src/utils',
    '@styles': 'src/styles',
    '@images': 'src/images',
  })(config);

  return config;
};
