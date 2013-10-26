/*global define:false, module:false*/

'use strict';

define([
  'jquery',
  'marionette',
  'modules/model/Config',
  'modules/router/MainRoute',
  'modules/views/Menu',
  'modules/views/Carrousel',
  'modules/Layout'],
  function(
    $,
    marionette,
    Config,
    Route,
    Menu,
    Carrousel,
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

    // carrousel
    var collection = new Backbone.Collection([
      {name: "Tim", age: 5},
      {name: "Ida", age: 26},
      {name: "Rob", age: 55}
    ]);

    var carrousel = new Carrousel({
      model: model,
      collection: collection
    });

    // layouts 
    DesktopApp.regionMain.show(layout);
    layout.menu.show(new Menu({
      model : model
    }));
    layout.carrousel.show(carrousel);
  };

  return DesktopApp;
});