// Feed.js
// --------
define(["jquery", "backbone"],
    function($, Backbone) {
        var Note = Backbone.Model.extend({
                    title : "",
                    url : "",
                    content : ""
                });
        return Note;
    }
);