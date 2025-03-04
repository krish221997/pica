// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  config.resolver.extraNodeModules = {
    'web-streams-polyfill': require.resolve('web-streams-polyfill'),
  };

  config.resolver.sourceExts = [...config.resolver.sourceExts, 'cjs'];

  return config;
})();