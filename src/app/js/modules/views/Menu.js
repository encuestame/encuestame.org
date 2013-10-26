/*global define:false, module:false*/

'use strict';

define([
    'backbone', 
    'marionette'],
    function(Backbone, Marionette) {
    

    var MenuView = Backbone.Marionette.ItemView.extend({

      template: "#menu-nav-template",

      initialize: function() {
         console.log("menu data", this.model.toJSON());
      },

      onBeforeRender : function() {

      },

      modelChanged: function(model, value){
      },

      modelAdded: function(model){
      }
    });

    return MenuView;
});