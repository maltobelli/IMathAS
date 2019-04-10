const path = require("path");

module.exports = {
  outputDir: path.resolve(__dirname, '../vue'),
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  },
  // delete HTML related webpack plugins
  filenameHashing: false,
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.delete('html')
      config.plugins.delete('preload')
      config.plugins.delete('prefetch')
      config.plugins.delete('copy')
    }
  }
};