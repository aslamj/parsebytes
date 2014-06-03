/** 
 * A Backbone model for Datatype (/api/datatypes/id).
 *
 * @module DatatypeModel
 * @author Jangul Aslam <aslamj@gmail.com>
 * @copyright Jangul Aslam, 2014
 */

define([
  'jquery',
  'backbone'
], function($, Backbone) {
  var DatatypeModel = Backbone.Model.extend({
    urlRoot: '/api/datatypes'
  });

  return DatatypeModel;
});