/*global require:false, module:false*/

'use strict';

require.config({

  // list of vendor paths

  paths: {

    jquery : "vendor/jquery/jquery",

    underscore : "vendor/underscore/underscore",

    domReady : "vendor/requirejs-domready/domReady",

    bootstrap : "vendor/bootstrap/bootstrap"
  },

  // requirejs shim configuration

  shim: {

    jquery: {
      exports: "jQuery"
    },

    bootstrap: ["jquery"],

    underscore: {
      exports: "_"
    }

  }

});


require([
    'jquery',
    'underscore',
    'domReady',
    'modules/EnMeApp',
    'bootstrap'
  ],
     function(
        $,
        _,
        domReady,
        EnMeApp) {

      domReady(function () {
          // determine positions
          EnMeApp.determine_positions();
          // trigger the scrill
          $(this).trigger('scroll');
          // enable auto scroll top on devices
          EnMeApp.enableTouchMode();
          // add events for each top menu
          EnMeApp.addMenuScrollDown();
        });

});
