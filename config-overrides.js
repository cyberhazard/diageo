const rewireStyledComponents = require('react-app-rewire-styled-components');
const rewireReactHotLoader = require('react-app-rewire-hot-loader');
const rewireSVGR = require('react-app-rewire-svgr');

module.exports = function override(config, env) {
  config = rewireReactHotLoader(config, env)
  config = rewireStyledComponents(config, env);
  config = rewireSVGR(config, env);
  return config;
}
