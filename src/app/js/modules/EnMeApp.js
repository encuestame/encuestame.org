/*global define:false, module:false*/

'use strict';

define([
  'jquery',
  "underscore"
],

function($, _ ) {
  // context variables definition
  var Modernizr = window.Modernizr,
  _document = document,
  _window = window,
  navbar = $('.navbar'),
  top_positions = [],
  scroll_top_time = 700,
  sections = [];

  var fn = {

    /**
     * Determine location
     * @property
     */
    determine_location: function() {
        // get the current windon scroll top
        var win_top = $(_window).scrollTop(),
        // add as active the selected menu
        add_active = function() {
                if ($(this).attr('href').indexOf(sections[i]) !== -1) {
                    $(this).parent().addClass('active');
                }
        };
        // iterate each top menu position
        for (var i = 0; i < top_positions.length ;i++) {
          if (win_top + 250 >= top_positions[i] && win_top < top_positions[i+1] || win_top + 250 >= top_positions[i] && top_positions[i+1] === undefined) {
            if (navbar.find('li').length) {
                  navbar.find('.active').removeClass('active');
            }
            navbar.find('li a').each(add_active);
          }
        }
    },

    /**
     * Determine positions for each section
     * @property determine_positions
     */
    determine_positions : function() {
        var i = 0;
        $('.section').each(function() {
            var section_id = $(this).attr('id'),
            section_top = Math.round($(this).offset().top);
            i++;
            sections.push(section_id);
            top_positions.push(section_top);
          });
        this.determine_location();
      },

    /**
     * If is a mobile device, scroll top the page on load
     * @method enableTouchMode
     */
    enableTouchMode: function() {
        if (Modernizr.touch && !_window.location.hash) {
          $(_window).load(function () {
            setTimeout(function () {
              _window.scrollTo(0, 1);
            }, 0);
          });
        }
      },

    /**
     * Add events for each mail-link node in the page
     * @method addMenuScrollDown
     */
    addMenuScrollDown: function() {
        var parent = this;
        // add click event
        $(_document).on('click', '.navbar a.main-link, a.main-link', function(e) {
          e.preventDefault();
          var $this = $(this);
          if ($this.attr('href').length > 1) {
            var section_id = $this.attr('href'),
            new_top = $(section_id).offset().top;
            $('html, body').animate({
              scrollTop: new_top
            }, scroll_top_time);
          }
          return false;
          // event triggered on scroll
        }).on('scroll', function() {
            // update the current location
            parent.determine_location();
          });
      }
  };

  return fn;
});
