/*global require:false, module:false*/

'use strict';

require.config({

  // list of vendor paths

  paths: {

    jquery : "vendor/jquery/jquery",

    i18next : "vendor/i18next/release/i18next.amd-1.5.7",

    underscore : "vendor/underscore/underscore",

    domReady : "vendor/requirejs-domready/domReady",

    bootstrap : "vendor/bootstrap/dist/js/bootstrap",

    backbone : "vendor/backbone/backbone",

    bowser : "vendor/bowser/bowser",

    marionette : "vendor/marionette/lib/backbone.marionette"
  },

  // requirejs shim configuration

  shim: {

    jquery: {
      exports: "jQuery"
    },

    bootstrap: {
        //These script dependencies should be loaded before loading
        //backbone.js
        deps: ['jquery'],
        //Once loaded, use the global 'Backbone' as the
        //module value.
        exports: 'jQuery'
    },

    backbone: {
        //These script dependencies should be loaded before loading
        //backbone.js
        deps: ['underscore', 'jquery'],
        //Once loaded, use the global 'Backbone' as the
        //module value.
        exports: 'Backbone'
    },

    marionette: {
        //These script dependencies should be loaded before loading
        //backbone.js
        deps: ['jquery', 'underscore', 'backbone'],
        //Once loaded, use the global 'Backbone' as the
        //module value.
        exports: 'Marionette'
    },      

    underscore: {
      exports: "_"
    }

  }

});

//

require([
    'jquery',
    'domReady',
    'modules/Application',
    'modules/MobileApp',
    'modules/NonSupport',
    "i18next",
    "bowser",
    'bootstrap'
  ],
     function(
        $,
        domReady,
        Application,
        MobileApp,
        NonSupport,
        i18next,
        bowser) {

      domReady(function () {

      $.getJSON("config/data.json", function(data) {
             
            console.log("config data", data);

             i18next.init({
                ns: { namespaces: ['ns.common', 'ns.special'], defaultNs: 'ns.special'},
                useLocalStorage: false,
                fallbackLng: 'en-US',
                debug: false
            });

            //bowser // browser detection

            var options = data;

            if (bowser.webkit && bowser.firefox) {

            } else if (bowser.msie && bowser.version <= 6) {

            } else if (bowser.msie && bowser.version === 8) {

            } else if (bowser.msie && bowser.version > 8) {

            }

            if (categorizr.isDesktop) {
                Application.start(options);
            } else if (categorizr.isMobile) {
                MobileApp.start(options);
            } else if (categorizr.isTablet) {
                MobileApp.start(options);
            } else if (categorizr.isTV) {
                Application.start(options);
            }
      });
      
    });

});


















