define(["jquery",
        "backbone",
        "text!templates/release-item.html"],

    function($, Backbone, template){

        var GitHubItem = Backbone.View.extend({

            // View constructor
            initialize: function() {
                this.render();
            },

            /**
             *
             * @method
             */
            render: function() {
                // Setting the view's template property using the Underscore template method
                this.template = _.template(template, this.model.toJSON());
                // Dynamically updates the UI with the view's template
                this.$el = $(this.template);
                return this;
              }
            });
        // Returns the View class
        return GitHubItem;

    }

);