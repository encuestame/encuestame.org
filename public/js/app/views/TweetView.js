// View.js
// -------
define(["jquery", "backbone", "models/Model", "text!templates/tweets-item.html"],

    function($, Backbone, Model, template){

        var TweetView = Backbone.View.extend({

            // View constructor
            initialize: function() {
                // Calls the view's render method
                this.render();
            },

            render: function() {
                //this.model.set("created_at", 1235);
                this.template = _.template(template, this.model.toJSON());
                // Dynamically updates the UI with the view's template
                this.$el.append(this.template);
                //var tweet = _.template( $(".tweets-wrapper").html(), this.model.toJSON());
                //$("#tweets").append(tweet);
                $("#t_" + this.model.get("id")).fadeIn();
                return this;
              }
            });
        // Returns the View class
        return TweetView;

    }

);