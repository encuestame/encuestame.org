/*global define:false, module:false*/

'use strict';

define([
	'backbone',
	'marionette'], 
	function(Backbone, Marionette, controller) {

	var Router = Backbone.Router.extend({

		routes: {
			'': 'home',
			'home': 'home',
			'features': 'features',
			'download': 'download',
			'contributors': 'contributors',
			'about': 'about'
		}

	});

	return Router;

});