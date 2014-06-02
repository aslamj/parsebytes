/** 
 * A Backbone model for ParseBytes (/api).
 *
 * @module ParseBytesModel
 * @author Jangul Aslam <aslamj@gmail.com>
 * @copyright Jangul Aslam, 2014
 */

define([
  'jquery',
  'backbone'
], function($, Backbone) {
  var ParseBytesModel = Backbone.Model.extend({
    urlRoot: '/api/parsebytes',

    defaults: function() {
      return [];
    },

    parse: function(response) {
      console.log(JSON.stringify(response));
      return response;
    },

    save: function (attrs, options) {
      if (! options) { options = {}; }
 
      return Backbone.Model.prototype.save.call(this, attrs, options);
    }
  });

  return ParseBytesModel;
});