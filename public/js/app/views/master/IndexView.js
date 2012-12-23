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
        "views/Tweets",
        "support/Slider",
        "views/FacebookFeed",
        "views/GitHubFeed",
        "support/Constants",
        "i18n!nls/Index",
        //"i18n!nls/general",
        "text!templates/master/index-view.html"],

    function($,
             Backbone,
             Tweets,
             SliderSupport,
             FacebookFeed,
             GitHubFeed,
             Constants,
             Index,
             template) {

        var IndexView = Backbone.View.extend({

            el: $("#content"),

            // View constructor
            initialize: function() {
                this.render();
            },

            /**
             *
             * @method
             */
            render: function() {
                console.log("i18n", Index);
                this.$el.empty();
                this.template = _.template(template, Constants),
                this.$el.append($(this.template));
                new Tweets({el: this.$el.find(".tweet-list")});
                new FacebookFeed({el: this.$el.find(".fb-list")});
                new GitHubFeed({el: this.$el.find(".gh-list")});
                new SliderSupport(this.$el.find("#featured"));
                return this;
              }
            });
        // Returns the View class
        return IndexView;

    }

);