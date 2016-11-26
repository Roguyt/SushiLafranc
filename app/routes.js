/**
 * Routes configuration file
 * Created by Roguyt
 */

/**
 * Load modules
 */

/**
 * Utils functions
 */

var self = module.exports = function(app, passport, upload, db) {
	/**
	 * /
	 * Home page
	 */
	app.get('/', function(req, res) {
		res.render('index.ejs', {});
	});
};