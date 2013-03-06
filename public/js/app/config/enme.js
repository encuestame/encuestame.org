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

      //"jqueryui": "libs/jqueryui",

      "underscore": "libs/lodash",

      "backbone": "libs/backbone",

      'bootstrap': 'libs/bootstrap',

      //"backbone.layoutmanager": "libs/plugins/backbone.layoutmanager",

      "i18n" : "libs/plugins/i18n",

      "nls" : "app/nls",

      "domReady" : "libs/plugins/domReady",

      "moment" : "libs/moment",

      // Plugins
      // -------
      //"backbone.validateAll": "libs/plugins/Backbone.validateAll",

      //"bootstrap": "libs/plugins/bootstrap",

      "colorbox": "libs/plugins/jquery.colorbox",

      "slides.jquery": "libs/plugins/slides.jquery",

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

       // Twitter Bootstrap jQuery plugins
      "bootstrap": ["jquery"],

       // jQueryUI
      //"jqueryui": ["jquery"],

       // jQuery Plugin Colorbox
      "colorbox": ["jquery"],


      // Backbone
      "backbone": {

            // Depends on underscore/lodash and jQuery
            "deps": ["underscore", "jquery"],

            // Exports the global window.Backbone object
            "exports": "Backbone"

      }
  }

});

// Includes Desktop Specific JavaScript files here (or inside of your Desktop router)
require(["jquery", "domReady", "backbone", "routers/DesktopRouter", 'support/IE', "colorbox", 'moment', 'bootstrap'],

  function($, domReady, Backbone, DesktopRouter, IE) {
    var _IE = new IE();

    //TODO: add domReady
    //$('#hxome').carousel();

    if (_IE.checkVersion()) {
       // Instantiates a new Desktop Router instance
       //new DesktopRouter();
       var Modernizr = window.Modernizr;
       // Hide address bar on mobile devices (except if #hash present, so we don't mess up deep linking).
        if (Modernizr.touch && !window.location.hash) {
          $(window).load(function () {
            setTimeout(function () {
              window.scrollTo(0, 1);
            }, 0);
          });
        }


    $(window).on('load', function() {
        determine_positions();
        $(this).trigger('scroll');
    });


    $(document).on('click', '.navbar a.main-link, a.main-link', function() {
        var $this = $(this);
        if ($this.attr('href').length > 1) {
          var section_id = $this.attr('href');
          var new_top = $(section_id).offset().top;
          $('html, body').animate({
            scrollTop: new_top
          }, 700);
        // } else if($(this).hasClass('anchor') && $(this).parents('.section-brand-love').length) {
        //   //show_services();
        // } else if($(this).hasClass('back') && $(this).parents('.services').length) {
        //   ///hide_services();
        }
        return false;
      }).on('scroll', function() {
        determine_location();
        console.log("scrolllll");
      var win_top = $(window).scrollTop();
      var win_hei = $(window).height();
    // if($('.section-brand-love').length && win_top + win_hei*.4 >= $('.section-brand-love:eq(0)').offset().top) {
    //   show_brands();
    // }
    // if(win_top + win_hei*.4 >= $('#contact').offset().top) {
    //   show_contact();
    // }
    // if($('.section-stories').length && win_top + win_hei*.4 >= $('.section-stories:eq(0)').offset().top) {
    //   show_stories();
    // }
    // if($('.section-who-and-how').length && win_top + win_hei*.4 >= $('.section-who-and-how:eq(0)').offset().top) {
    //   show_bio();
    // }
    // if($('.section-home').length && win_top + win_hei*.4 >= $('.section-home:eq(0)').offset().top) {
    //   show_home();
    // }
  });

     var top_positions = [], sections = [];

      function determine_positions() {
        var i = 0;
        $('.section').each(function() {
            var section_id = $(this).attr('id');
            var section_top = Math.round($(this).offset().top);
            i++;
            sections.push(section_id);
            top_positions.push(section_top);
        });

        determine_location();
        console.log("dsds", top_positions);
      }


      function determine_location() {

        console.log("determine_location", sections);

        var win_top = $(window).scrollTop();

        for(i=0;i<top_positions.length;i++) {
          if(win_top + 250 >= top_positions[i] && win_top < top_positions[i+1] || win_top + 250 >= top_positions[i] && top_positions[i+1] == undefined) {
            console.log("determine_location", top_positions[i]);
            // remove
            console.log('2', $('.navbar li').length);
            if ($('.navbar li').length) {
                  $('.navbar .active').removeClass('active');
            }
            //
            $('.navbar li a').each(function() {
                if ($(this).attr('href').indexOf(sections[i]) != -1) {
                    $(this).parent().addClass('active');
                }
            })
          }
        }
      }





    } else {
      var twitter = '<a class="twitter-timeline" href="https://twitter.com/encuestame" data-widget-id="288261822128193537">Tweets por @encuestame</a><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>';
      var _ie_message = 'Greetings, time traveller. Welcome to the future! Try our amazing new browser technologies.';
      $('body').html('<div class="non"><a href="http://www.encuestame.org"><img src="img/logos/encuestame/logo_high.png" width="500" height="118"></a><h3 class="non_ie_support">' + _ie_message + '</h3><p> <a href="http://wiki.encuestame.org/display/DOC/Supported+Platforms" target="_blank">Encuestame doesn\'t support Internet Exporer 6 </a> <br/> <a href="http://www.ie6countdown.com/" target="_blank">Internet Exporer 6 Countdown</a> <br/><a href="http://www.ie6death.com/" target="_blank">Internet Exporer 6 is dead</a><br/> ' + twitter +' </p></div>');
    }
  }

);