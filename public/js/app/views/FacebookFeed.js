
define(["jquery",
     "backbone",
     "support/Feed",
     "models/Feed",
     "views/FeedItem",
     "support/Constants",
     "text!templates/facebook.html"],

    function($, Backbone, FeedSupport, Feed, FeedItem, Constants, template){

        var FaceBookFeed = Backbone.View.extend({

            el: $(".fb-list"),

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
                var feed = new FeedSupport(Constants.rss.facebook, function(data) {
                    //console.log("feed data", data);
                    var entries = data.entries;
                    this.template = _.template(template, {});
                    // Dynamically updates the UI with the view's template
                    //this.$el.append(this.template);
                    $.each(entries, function(i, item) {
                        var model = new Feed(item),
                        facebookFeedItem = new FeedItem({
                            //el : $(parent.template),
                            model : model
                        });
                        parent.$el.append(facebookFeedItem.$el);
                    });
                });
                feed.call();
                return this;
              }
            });
        // Returns the View class
        return FaceBookFeed;

    }

);