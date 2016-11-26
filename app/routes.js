/**
 * Routes configuration file
 * Created by Roguyt
 */

/**
 * Load modules
 */

	const fs = require('fs');

/**
 * Utils functions
 */

var self = module.exports = function(app, passport, upload, db) {
	/**
	 * /
	 * Home page
	 */
	app.get('/', (req, res) => {
		res.render('index.ejs', {});
	});

	/**
	 * /update
	 * Update timestamp when Harry eat Sushi
	 */
	app.get('/update', (req, res) => {
		if (req.headers.harrytoken == "Kuroyukihime") {
			let date = Date.now();
			fs.writeFile(__dirname + '/config/date.txt', date, (err) => {
				if (!err) {
					res.send('Done/20');
				} else {
					res.send('Error while writing');
				}
			});
		} else {
			res.send('Get the fuck out of here.');
		}
	});
};