// DesktopInit.js
// --------------
require.config({

  // Sets the js folder as the base directory for all future relative paths
  baseUrl: "./js",

  // 3rd party script alias names (Easier to type "jquery" than "libs/jquery, etc")
  // probably a good idea to keep version numbers in the file names for updates checking
  paths: {

      // Core Libraries
      // --------------
      "jquery": "libs/jquery",

      "jqueryui": "libs/jqueryui",

      "underscore": "libs/lodash",

      "backbone": "libs/backbone",

      "backbone.layoutmanager": "libs/plugins/backbone.layoutmanager",

      "i18n" : "libs/plugins/i18n",

      "nls" : "app/nls",

      "domReady" : "libs/plugins/domReady",

      "foundation" : "libs/foundation.min",

      "moment" : "libs/moment",

      // Plugins
      // -------
      "backbone.validateAll": "libs/plugins/Backbone.validateAll",

      "bootstrap": "libs/plugins/bootstrap",

      "colorbox": "libs/plugins/jquery.colorbox",

      "text": "libs/plugins/text",

      // Application Folders
      // -------------------
      "collections": "app/collections",

      "support": "app/support",

      "models": "app/models",

      "routers": "app/routers",

      "templates": "app/templates",

      "views": "app/views"

  },

  // Sets the configuration for your third party scripts that are not AMD compatible
  shim: {
       //foundation framework
      "foundation": ["jquery"],

       // Twitter Bootstrap jQuery plugins
      "bootstrap": ["jquery"],

       // jQueryUI
      "jqueryui": ["jquery"],

       // jQuery Plugin Colorbox
      "colorbox": ["jquery"],

       // backbone layoutmanage
      "backbone.layoutmanager": ["backbone"],

      // Backbone
      "backbone": {

            // Depends on underscore/lodash and jQuery
            "deps": ["underscore", "jquery"],

            // Exports the global window.Backbone object
            "exports": "Backbone"

      },

      // Backbone.validateAll plugin that depends on Backbone
      "backbone.validateAll": ["backbone"]

  }

});

// Includes Desktop Specific JavaScript files here (or inside of your Desktop router)
require(["jquery", "domReady", "backbone", "routers/DesktopRouter", "foundation", "jqueryui", "colorbox", "backbone.validateAll", "foundation", "backbone.layoutmanager", 'moment'],

  function($, domReady, Backbone, DesktopRouter) {

     // Instantiates a new Desktop Router instance
     new DesktopRouter();

     var Modernizr = window.Modernizr;
     $(document).foundationNavigation();
     $(document).foundationTopBar();
  }

);