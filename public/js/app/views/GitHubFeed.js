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
 *  @module Views
 *  @namespace
 *  @class GitHubFeed
 */
 define(["jquery",
        "backbone",
        "support/Feed",
        "models/Feed",
        "views/FeedItem",
        "support/Constants",
        "text!templates/githubfeed.html"],

     function($, Backbone, FeedSupport, Feed, FeedItem, Constants, template) {

         var GitHubFeed = Backbone.View.extend({

             el: $(".gh-list"),

             // View constructor
             initialize: function() {
                 this.render();
             },

             /**
              *
              * @method
              */
             render: function() {
                 var parent = this;
                 var feed = new FeedSupport(Constants.rss.github, function(data) {
                     //console.log("feed data", data);
                     var entries = data.entries;
                     this.template = _.template(template, {});
                     // Dynamically updates the UI with the view's template
                     //this.$el.append(this.template);
                     $.each(entries, function(i, item) {
                         var model = new Feed(item),
                         feedItem = new FeedItem({
                             //el : $(parent.template),
                             model : model
                         });
                         parent.$el.append(feedItem.$el);
                     });
                 });
                 feed.call();
                 return this;
               }
             });
         // Returns the View class
         return GitHubFeed;

     }

 );