
/*global define:false, module:false*/

'use strict';

define(['marionette'],
    function(marionette){
  
    var AppLayout,
    default_layout = Backbone.Marionette.Layout.extend({
          template: "#app-layout-template",
          regions: {
            menu: "#menu",
            content: "#content",
            sub_content: "#sub-content",
            footer: "#footer"
          }
    });

    if (categorizr.isDesktop && categorizr.isTV) {
        AppLayout = default_layout;
    } else if (categorizr.isMobile || categorizr.isTablet) {        
        AppLayout = Backbone.Marionette.Layout.extend({
          template: "#mobile-layout-template",
          regions: {
            menu: "#menu",
            content: "#content",
            footer: "#footer"
        }});
    } else {
        AppLayout = default_layout;
    }

  return AppLayout;
});