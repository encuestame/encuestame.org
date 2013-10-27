/*global define:false, module:false*/

'use strict';

define([
  'jquery',
  'marionette',
  'modules/model/Config',
  'modules/router/MainRoute',
  'modules/views/Menu',
  'modules/views/Carrousel',
  'modules/views/Features',
  'modules/Layout'],
  function(
    $,
    marionette,
    Config,
    Route,
    Menu,
    Carrousel,
    Features,
    Layout){
  
  var DesktopApp = new Marionette.Application();

  DesktopApp.addRegions({
    regionMain: '#enme-main'
  });  

  DesktopApp.addInitializer(function(data) {
      this.initAppLayout(data);
    });

  DesktopApp.initAppLayout = function(data) {
    var model = new Config(data);
     // Start backbone's history for hash navigation after the app was initialized.
    DesktopApp.on('initialize:after', function() {
        Backbone.history.start({
          pushState: true
        });
      });

    var layout = new Layout();
    // layouts 
    DesktopApp.regionMain.show(layout);
    layout.menu.show(new Menu({
      model : model
    }));    

    // carrousel
    if (data.carrousel) {
      var collection = new Backbone.Collection(data.carrousel.items);
      var carrousel = new Carrousel({
        model: model,
        collection: collection
      });
      layout.carrousel.show(carrousel);
    }

    // features

    if (data.features) {
      var collection_fe = new Backbone.Collection(data.features.items);
      var features = new Features({
        model: model,
        collection: collection_fe
      });
      layout.features.show(features); 
    }


    
  };

  return DesktopApp;
});