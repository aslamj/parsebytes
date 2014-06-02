/** 
 * A Backbone view for ParseBytes.
 *
 * @module ParseBytesView
 * @author Jangul Aslam <aslamj@gmail.com>
 * @copyright Jangul Aslam, 2014
 */

define([
  'jquery',
  'hogan',
  'backbone',
  'text!../templates/parseBytesForm.html'
], function($, Hogan, Backbone, parseBytesForm){
  var ParseBytesView = Backbone.View.extend({

    el: '#parsebytes-ui',
    
    events: {
      "click #submit": "submit"
    },

    initialize: function() {
      this.model.on("change", this.render, this);
      
      this.model.fetch();
      
      return this;
    },

    render: function() {
      var template = Hogan.compile(parseBytesForm);
      this.datatypes = this.model.get('datatypes');
      this.$el.html(template.render(this));

      return this;
    },

    submit: function(e) {

      return this;
    }
  });

  return ParseBytesView;
});