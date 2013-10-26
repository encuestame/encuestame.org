/*global define:false, module:false*/

'use strict';

define([
  'marionette',
  'modules/model/Config',
  'modules/router/MainRoute',
  'modules/views/Menu',
  'modules/Layout'],
  function(
    marionette,
    Config,
    Route,
    Menu,
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
    DesktopApp.regionMain.show(layout);
    layout.menu.show(new Menu({
      model : model
    }));
  };

  return DesktopApp;
});