require.config({
  //baseUrl: '/',
  paths: {
    'jquery': '/vendors/jquery/jquery',
    'underscore': '/vendors/underscore.js/underscore',
    'text': '/vendors/require-text/text',
    'hogan': '/vendors/hogan.js/hogan',
    'modernizr': '/vendors/modernizr/modernizr',
    'foundation': '/vendors/foundation/foundation',
    'backbone': '/vendors/backbone.js/backbone',
    'backbone.syphon': '/vendors/backbone.syphon/backbone.syphon',
    'backbone.localStorage': '/vendors/backbone-localstorage.js/backbone.localStorage',
    'backbone.marionette': '/vendors/backbone.marionette/backbone.marionette',
  },
  shim: {
    'underscore': {
      exports: '_'
    },
    'hogan': {
      //deps: [ 'template' ],
      exports: 'Hogan'
    },
    'modernizr': {
        exports: 'Modernizr'
    },
    'foundation': {
        deps: [
            'jquery',
            'modernizr'
        ],
        exports: 'Foundation'
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
  'jquery',
  'foundation',
  'parseBytesModel',
  'datatypesCollection',
  'parseBytesView'
], function($, foundation, ParseBytesModel, DatatypesCollection, ParseBytesView) {
  //$("body").find("#parsebytes_ui").html("ParseBytes.net");

  //$(document).ready(function() {
    $(document).foundation();

    var view = new ParseBytesView({
      model: {
        parseBytes: new ParseBytesModel(),
        datatypes: new DatatypesCollection()
      }
    });
  //});
});