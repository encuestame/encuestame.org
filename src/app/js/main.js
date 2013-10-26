/*global require:false, t:false, module:false*/

'use strict';

require.config({

  // list of vendor paths

  paths: {

    jquery : "vendor/jquery/jquery",

    i18next : "vendor/i18next/release/i18next-1.7.1",

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

    i18next: {
      deps: ['jquery'],
      exports: "i18n"
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
    "bowser",    
    "i18next",
    'bootstrap'
  ],
     function(
        $,
        domReady,
        Application,
        MobileApp,
        NonSupport,
        bowser) {

      domReady(function () {

      $.getJSON("config/data.json", function(data) {
             
            console.log("config data", data);

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

            i18n.init({
                ns: { 
                  namespaces: ['ns.common', 'ns.special'], 
                  defaultNs: 'ns.special'
                },
                useLocalStorage: false,
                debug: true
            }, function(t){
              $('body').i18n();
            });            
      });
      
    });

});


















