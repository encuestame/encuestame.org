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
         "views/DownloadFeed",
         "views/ReleaseNotes",
         "models/Note",
         "support/Constants",
         "collections/NoteCollection",
        "text!templates/master/download.html"],

    function($,
             Backbone,
             DownloadFeed,
             ReleaseNotes,
             Note,
             Constants,
             NoteCollection,
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
                this.$el.empty();
                this.template = _.template(template, Constants);
                this.$el.append($(this.template));
                new DownloadFeed({el: this.$el.find(".download-feed")});
                var notes = new NoteCollection();
                var create_note = function (title, content, url, date) {
                        var note = new Note({
                            title : title,
                            url : url,
                            date : date,
                            content : content
                        });
                        notes.add(note);
                };
                create_note("Encuestame 1.146-FINAL Release Notes", "This release it's more stable, several bug corrections and new user interfaces, improved the publication of surveys and new build system, IE support, responsive design, improved the social network distribution and user administration.", 'http://wiki.encuestame.org/display/RELEASE/Encuestame+1.146-FINAL+Release+Notes', 1362178800000);
                create_note("Encuestame 1.146RC1 Release Notes", "What's new in the Encuestame 1.146RC1 beta release", 'http://wiki.encuestame.org/display/RELEASE/Encuestame+1.146RC1+Release+Notes', 1346104800000);
                create_note("Encuestame 1.145 Release Notes", "What's new in the Encuestame 1.145 beta release", 'http://wiki.encuestame.org/display/RELEASE/Encuestame+1.145+Release+Notes', 1341093600000);
                create_note("Encuestame 1.144 Release Notes", "What's new in the Encuestame 1.144 beta release", 'http://wiki.encuestame.org/display/RELEASE/Encuestame+1.144+Release+Notes', 1335564000000);
                create_note("Encuestame 1.143 Release Notes", "What's new in the Encuestame 1.143 beta release", 'http://wiki.encuestame.org/display/RELEASE/Encuestame+1.143+Release+Notes', 1331247600000);
                create_note("Encuestame 1.142 Release Notes", "What's new in the Encuestame 1.142 beta release", 'http://wiki.encuestame.org/display/RELEASE/Encuestame+1.142+Release+Notes', 1330642800000);
                new ReleaseNotes({ collection : notes, el: this.$el.find(".release-notes")});
                return this;
              }
            });
        // Returns the View class
        return IndexView;

    }

);