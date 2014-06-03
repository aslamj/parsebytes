/** 
 * A Backbone collection for Datatypes (/api/datatypes).
 *
 * @module DatatypesCollection
 * @author Jangul Aslam <aslamj@gmail.com>
 * @copyright Jangul Aslam, 2014
 */

define([
  'jquery',
  'backbone',
  'datatypeModel'
], function($, Backbone, DatatypeModel) {
  var DatatypesCollection = Backbone.Collection.extend({
    url: '/api/datatypes',
    model: DatatypeModel
  });

  return DatatypesCollection;
});