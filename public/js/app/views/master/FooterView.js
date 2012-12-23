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
        "support/Constants",
        "text!templates/master/footer.html"],

    function($,
             Backbone,
             Constants,
            template) {

        var FooterView = Backbone.View.extend({

            el: $("#footer"),

            // View constructor
            initialize: function() {
                this.render();
            },

            /**
             *
             * @method
             */
            render: function() {
                this.$el.empty();
                this.template = _.template(template, Constants),
                this.$el.append($(this.template));
                return this;
              }
            });
        // Returns the View class
        return FooterView;

    }

);