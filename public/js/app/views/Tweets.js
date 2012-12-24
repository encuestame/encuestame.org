// View.js
// -------
define(["jquery",
    "backbone",
     "models/Tweet",
      "views/TweetView",
      "support/Constants",
       "text!templates/tweets.html"],

    function($, Backbone, Model, TweetView, Constants, template){

        var Tweets = Backbone.View.extend({

            // The DOM Element associated with this view
            el: $(".tweet-list"),

            // View constructor
            initialize: function() {
                // Calls the view's render method
                this.render();
            },

            // // View Event Handlers
            // events: {

            // },

            /**
             *
             * @method
             */
            getTwitterSearch : function (_template) {
                    $.ajax({
                        url: Constants.rss.twitter,
                        type: 'GET',
                        dataType: 'jsonp',
                        data: {
                            screen_name: "encuestame",
                            include_rts: true,
                            count: 10,
                            include_entities: true
                        },
                        success: function(data, textStatus, xhr) {
                            for(a in data) {
                              var tweet = new Model(data[a]);
                              var tweetView = new TweetView({model: tweet});
                                  tweetView.render();
                              var _tweet_model = new Model(tweet),
                                    tweet_view = new TweetView({
                                        model : _tweet_model,
                                        el : _template
                              });
                          }
                        }

                    });
            },

            /**
             * Renders the view's template to the UI
             * @method render
             */
            render: function() {
                // Setting the view's template property using the Underscore template method
                this.template = _.template(template, {});
                var _tweet = $(this.template).find(".t-list");
                _tweet.empty();
                this.getTwitterSearch(_tweet);
                // Dynamically updates the UI with the view's template
                this.$el.append(_tweet);
                // Maintains chainability
                return this;
            }

        });

        // Returns the View class
        return Tweets;

    }

);