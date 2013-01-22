/*
 * Copyright 2013 encuestame
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

/***
 *  @author juanpicado19D0Tgm@ilDOTcom
 *  @version 2.0
 *  @module
 *  @namespace
 *  @class
 */
define(["jquery",
        "backbone",
        "domReady",
        "views/master/IndexView",
        "views/master/Contributors",
        "views/master/Download",
        "views/master/Features",
        "views/master/FooterView",
        "views/master/AboutView",
        "foundation"],
        function($,
                 Backbone,
                 domReady,
                 IndexView,
                 Contributors,
                 Download,
                 Features,
                 FooterView,
                 AboutView,
                 foundation) {

        var DesktopRouter = Backbone.Router.extend({

            initialize: function() {

                // Tells Backbone to start watching for hashchange events
                Backbone.history.start();
            },

            // All of your Backbone Routes (add more)
            routes: {
                // When there is no hash on the url, the home method is called
                "": "index",
                "features" : "features",
                "download" : "download",
                "screenshots" : "screenshots",
                "contributors" : "contributors",
                "about" : "about",
                "contact" : "contact",
                "source" : "source"
            },

            index: function() {
                // Instantiates a new view which will render the header text to the page
                domReady(function () {
                    var node  = $("#content");
                    new IndexView({el: node});
                    new FooterView();
                });
            },

            features : function () {
                 domReady(function () {
                    var node  = $("#content");
                    console.log("node", Features);
                    new Features({el: node});
                    new FooterView();
                });
            },

            download : function () {
                  domReady(function () {
                    var node  = $("#content");
                    new Download({el: node});
                    new FooterView();
                });
            },

            contributors : function () {
                  domReady(function () {
                    var node  = $("#content");
                    new Contributors({el: node});
                    new FooterView();
                });
            },

            about : function () {
                new AboutView();
                new FooterView();
            }
        });

        // Returns the DesktopRouter class
        return DesktopRouter;

    }

);