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
          template: "#double-column",

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
    
      
    var doubleColumn = function(views, layout) {
        this.columns = 2;
        this.addlayout(layout);
        views = (views === null ? [] : views);
        for (var i = 0; i < views.length; i++) {
            this.addView(views[i]);
        }
    };


    doubleColumn.prototype = {
        addView : function() {

        },

        addlayout: function(layout){
          this.layout = layout;
        }
    };

    

    return doubleColumn;
});