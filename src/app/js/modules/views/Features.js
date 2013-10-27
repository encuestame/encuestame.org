/*global define:false, module:false*/

'use strict';

define([
    'backbone', 
    'modules/views/FeaturesItem',
    'modules/views/FeatureDetail',
    'marionette'],
    function(Backbone, FeaturesItem, FeatureDetail, Marionette) {
    

    var Features = Backbone.Marionette.CompositeView.extend({
        
        template: "#features-wrapper",

        itemView: FeaturesItem,

        className: "container marketing features",

        itemViewContainer: ".fea-resume",

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
            data = this.model.get("features"),
            indicators_container = this.$el.find('.fea-list');
            // create items
            for (var i = 0; i < items; i++) {
                var Detail = Backbone.Model.extend(); 
                var node = new FeatureDetail({
                  model : new Detail(data.details[i])
                });
                node.render();
                indicators_container.append(node.$el);
            }
        }

      });

    return Features;
});