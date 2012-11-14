require.config({
    baseUrl : '/resources/js',
    // configured on xhtml file.
    // baseUrl: 'scripts',
    paths : {
        // required
        "jquery" : "vendor/jquery/jquery-1.8.2.min",
        "jquery-mobile" : "vendor/jquery/jquery.mobile-1.2.0.min",
        "jquery.bootstrap" : 'vendor/bootstrap/bootstrap.min',
        "underscore" : "vendor/backbone/underscore",
        "backbone" : "vendor/backbone/backbone",
        // all required
        'modernizr' : 'vendor/modernizr-2.5.3',
        'mustache' : 'vendor/mustache',
        // require plugins
        "text" : "vendor/plugins/requirejs/text",
        "domReady" : "vendor/plugins/requirejs/domReady",
    },
    /*
     * support for non AMD modules.
     */
    shim : {
        'jquery.bootstrap' : {
            deps : [ 'jquery' ],
            exports : 'jquery'
        },
//        'backbone' : {
//            // These script dependencies should be loaded before loading
//            // backbone.js
//            deps : [ 'underscore', 'jquery' ],
//            // Once loaded, use the global 'Backbone' as the
//            // module value.
//            exports : 'Backbone'
//        },
//        underscore : {
//            'exports' : '_'
//        }
    },
    priority : [ 'text', 'modernizr', 'json2' ],
    "packages" : [ "core", 'media' ]
});

require([ "jquery", "jquery.bootstrap" ], function($, B) {
    // the jquery.alpha.js and jquery.beta.js plugins have been loaded.
    $(function() {
        console.log('init', $);
        console.log('init', B);
    });
});
