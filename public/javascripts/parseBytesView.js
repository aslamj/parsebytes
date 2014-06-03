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
      this.model.datatypes.on("sync", this.render, this);
      this.model.parseBytes.on("sync", this.render, this);

      this.model.datatypes.fetch();

      return this;
    },

    render: function() {
      var data = new Object();
      data.datatypes = this.model.datatypes.toJSON();
      data.data = this.model.parseBytes.get('data');
      data.results = this.model.parseBytes.get('results');
      console.log(JSON.stringify(data));

      var template = Hogan.compile(parseBytesForm);
      this.$el.html(template.render(data));

      return this;
    },

    submit: function(e) {
      if (e) {
          e.preventDefault();
      }

      this.model.parseBytes.set('datatype', this.$el.find("#datatypes-select :selected").val());
      this.model.parseBytes.set('data', this.$el.find('#data-textarea').val());
      this.model.parseBytes.save({}, {
        success: function(model, response) {
          console.log("post succeeded, response: " + JSON.stringify(response));
        },
        error: function(model, response) {
          console.log("error in posting");
        }
      });
      return this;
    }
  });

  return ParseBytesView;
});