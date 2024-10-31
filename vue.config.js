const webpack = require('webpack');

module.exports = {
  chainWebpack: config => {
    config
      .plugin('provide')
      .use(webpack.ProvidePlugin, [{
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      }]);
  },
  configureWebpack: {
    plugins: [
      // Define Vue feature flags to avoid warnings
      new webpack.DefinePlugin({
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: true,
        __VUE_OPTIONS_API__: true,  // Keep this if you're using the Options API
        __VUE_PROD_DEVTOOLS__: false  // Disable devtools in production
      })
    ]
  }
};
