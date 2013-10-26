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

        itemViewContainer: ".carousel-inner",

        itemViewOptions: {
          foo: "bar"
        },

        /**
         * 
         * @method 
         */
        onBeforeRender: function () {

        },

        /**
         * 
         * @method 
         */
        onRender : function() {            
            var items = this.collection.length,
            data = this.model.get("carrousel"),
            indicators_container = this.$el.find('.carousel-indicators');

            if (data.background) {
               this.$el.find('.carousel').css('backgroundColor', data.background);
            }

            // create items
            for (var i = 0; i < items; i++) {
                var _item = items[i],
                node = $('<li/>')
                .attr('data-target', '#carousel-example-generic')
                .attr('data-slice-to', i);
                if (i === 0) {
                  node.addClass('active');
                }
                indicators_container.append(node);
            }
        }

      });

    return Carrousel;
});