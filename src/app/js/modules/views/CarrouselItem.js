/*global define:false, module:false*/

'use strict';

define([
    'backbone', 
    'marionette'],
    function(Backbone, Marionette) {
    
    var CarroItem = Backbone.Marionette.ItemView.extend({
          tagName: "div",
          className: "carousel-inner",
          template: "#carrousel-item"
        });

    return CarroItem;
});