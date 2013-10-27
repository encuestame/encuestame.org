/*global define:false, module:false*/

'use strict';

define([
    'backbone', 
    'marionette'],
    function(Backbone, Marionette) {
    
    var CarroItem = Backbone.Marionette.ItemView.extend({

          //
          tagName: "div",

          //
          className: "",

          //
          template: "#features-block",

          /**
           * 
           * @method 
           */
          onRender : function() {
              // if (this.model.get('activated')) {
              //    this.$el.addClass('active');
              // }
          }
        });

    return CarroItem;
});