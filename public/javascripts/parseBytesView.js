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
      var modelData = new Object();
      modelData.datatypes = this.model.datatypes.toJSON();
      modelData.data = this.model.parseBytes.get('data').trim();
      modelData.results = this.model.parseBytes.get('results');
      console.log(JSON.stringify(modelData));

      var template = Hogan.compile(parseBytesForm);
      this.$el.html(template.render(modelData));

      return this;
    },

    submit: function(e) {
      if (e) {
          e.preventDefault();
      }

      this.model.parseBytes.set('datatype', this.$el.find("#datatypes-select :selected").val().trim());
      this.model.parseBytes.set('data', this.$el.find('#data-textarea').val().trim());
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