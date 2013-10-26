/*global define:false, module:false*/

'use strict';

define([
    'backbone', 
    'modules/views/CarrouselItem',    
    'marionette'],
    function(Backbone, CarrouselItem, Marionette) {
    

    var Carrousel = Backbone.Marionette.CompositeView.extend({
        
         template: "#carrousel-template",

        itemView: CarrouselItem,

        itemViewContainer: ".carro-items",

        itemViewOptions: {
          foo: "bar"
        },

        /**
         * 
         * @method 
         */
        onBeforeRender : function() {
            var items = this.collection.length,
            indicators_container = $('.carousel-indicators');
            for (var i = 0; i < items.length; i++) {
                var _item = items[i],
                node = $('<li/>')
                .attr('data-target', '#carousel-example-generic')
                .attr('data-slice-to', i);
                if (i === 0) {
                  node.addClass('active');
                }
            }
        }

      });

    return Carrousel;
});