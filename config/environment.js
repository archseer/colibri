/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'colibri',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    'ember-simple-auth': {
      authorizer: 'authorizer:token'
    },
    'ember-simple-auth-token': {
      serverTokenEndpoint: '/login', // The route for logging in
      identificationField: 'username', // Our login expects username
      passwordField: 'password',
      tokenPropertyName: 'token', // Token is returned back as token key
      timeFactor: 1000, // Needed since expiration sent in ms
      authorizationPrefix: null, // Don't set a prefix, guardian doesn't like
      authorizationHeaderName: 'Authorization' // Not needed?
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.contentSecurityPolicy = {
      'default-src': "'none'",
      'script-src': "'self'",
      'font-src': "'self' https://fonts.gstatic.com https://cdn.jsdelivr.net",
      'connect-src': "'self' http://localhost:4000",
      'img-src': "'self' *",
      'style-src': "'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.jsdelivr.net",
      'media-src': "'self' http://localhost:4000"
    }
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
