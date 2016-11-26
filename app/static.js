/**
 * Static routes configuration file
 * Created by Roguyt
 */

/**
 * Load modules
 */

	const express = require('express');

var self = module.exports = function(app) {
	/**
	 * Bower components
	 */
		// Normalizecss
		app.use('/lib/normalize-css',  express.static(__dirname + '/../bower_components/normalize-css'));
		// jQuery
		app.use('/lib/jquery',  express.static(__dirname + '/../bower_components/jquery/dist'));
	/**
	 * Assets
	 */
		// CSS
		app.use('/assets/css',  express.static(__dirname + '/../public/build/css'));
		// JS
		app.use('/assets/js',  express.static(__dirname + '/../public/build/js'));
		// IMG
		app.use('/assets/img',  express.static(__dirname + '/../public/assets/img'));
		// Lib ext
		app.use('/lib/ext/',  express.static(__dirname + '/../public/lib_ext'));
};