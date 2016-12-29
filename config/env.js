const { root } = require('./helpers');

module.exports = {

  EXCLUDE_SOURCEMAPS: [
    // these packages have problems with their sourcemaps
    root('node_modules/@angular'),
    root('node_modules/rxjs'),
  ],

  CUSTOM_COPY_FOLDERS: [

  ],

  CUSTOM_PLUGINS_COMMON: [

  ],

  CUSTOM_PLUGINS_DEV: [

  ],

  CUSTOM_PLUGINS_PROD: [

  ],

  CUSTOM_RULES_COMMON: [

  ],

  CUSTOM_RULES_DEV: [

  ],

  CUSTOM_RULES_PROD: [

  ],

  CUSTOM_DEV_RULES: [

  ],

  CUSTOM_PROD_RULES: [

  ],

  CUSTOM_PROD_PLUGINS: [

  ],

  CUSTOM_DEV_SERVER_OPTIONS: {
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
    },
  },

  CUSTOM_DEV_PLUGINS: [

  ],

};
