/*global define:false, module:false*/

'use strict';

define([
    'backbone', 
    'marionette'],
    function(Backbone, Marionette) {
    
    var FeatureItem = Backbone.Marionette.ItemView.extend({

          //
          tagName: "div",

          //
          className: "item",

          //
          template: "#features-item",

          /**
           * 
           * @method 
           */
          onRender : function() {
              if (this.model.get('activated')) {
                 this.$el.addClass('active');
              }
          }
    });

    return FeatureItem;
});