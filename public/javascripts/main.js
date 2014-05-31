require.config({
  //baseUrl: '/',
  paths: {
    'jquery': 'vendors/jquery/jquery',
    'underscore': 'vendors/underscore.js/underscore',
    'hogan': 'vendors/hogan.js/hogan',
    'backbone': 'vendors/backbone.js/backbone',
    'backbone.syphon': 'vendors/backbone.syphon/backbone.syphon',
    'backbone.localStorage': 'vendors/backbone-localstorage.js/backbone.localStorage',
    'backbone.marionette': 'vendors/backbone.marionette/backbone.marionette',
  },
  shim: {
    'underscore': {
      exports: '_'
    },
    'hogan': {
      deps: [ 'template' ],
      exports: 'Hogan'
    },
    'backbone': {
      deps: [ 'underscore', 'jquery'],
      exports: 'Backbone'
    },
    'backbone.syphon': {
      deps: [ 'backbone'],
      exports: 'Backbone.Syphon'
    },
    'backbone.localStorage': {
      deps: [ 'backbone'],
      exports: 'Backbone.LocalStorage'
    },
    'marionette': {
      deps: ['backbone'],
      exports: 'Backbone.Marionette'
    }
  }
});

require([
  "jquery",
  "backbone"
], function($, Backbone) {
  $("body").find("#parsebytes_ui").html("ParseBytes.net");

});