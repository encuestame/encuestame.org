define(["jquery","backbone","models/Tweet"],

  function($, Backbone, Tweet) {

    var Collection = Backbone.Collection.extend({

      model: Tweet

    });

    // Returns the Model class
    return Collection;

  }

);