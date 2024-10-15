// const { defineConfig } = require('@vue/cli-service')
module.exports = {
  chainWebpack: config => {
    config
      .plugin('provide')
      .use(require('webpack').ProvidePlugin, [{
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      }]);
  }
};
