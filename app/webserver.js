/**
 * Web server application file
 * Created by Roguyt
 */

/**
 * Load modules
 */

	const express = require('express');
	const _ = require('lodash');
	const request = require('request');

	const morgan = require('morgan');

	const mongoose = require('mongoose');

	const easyDebug = require('./lib/easyDebug');

/**
 * Load configuration files
 */

	const config = require('./config/config');
	const configDatabase = require('./config/database');

/**
 * Functions and Methods
 */

	function getLatestPicSushi(callback) {
		request('https://www.reddit.com/r/sushi.json', (err, res, body) => {
			if (!err && res.statusCode == 200) {
				let data = JSON.parse(body);
					data = data.data.children;
				data = data.filter((post) => {
					return post.data.selftext === "";
				});
				data = data[0].data.url;
				
				callback(null, data);
			} else {
				callback("error", null);
			}
		});
	}

/**
 * Initialization variables
 */

	let sushiBg = "/assets/img/defaultBg.png";

/**
 * Initialization and 
 * Configuration of Mongoose
 */

	// Connect to database
	//let db = mongoose.connect(configDatabase.url, configDatabase.database, configDatabase.port, configDatabase.options);

/**
 * Initialization and
 * Configuration of Express
 */

	// Initialization of Express
	let app = express();

	// Configuration of view engine
	app.set('view engine', 'ejs');

	// Initialization of Express's static routes
	require('./static.js')(app);

	// Configuration of debugger (call debugger after static to ignore them)
	app.use(morgan('tiny'));

	// Initialization of Express's routes
	require('./routes.js')(app);	

/**
 * Launch express server
 */

	app.listen(config.webServer.port, function() {
		easyDebug.info('webserver.js', 'Express running on port ' + config.webServer.port);
	});

/**
 * Auto download sushi picture
 */

	setInterval(() => {
		getLatestPicSushi((error, data) => {
			if (error === null) {
				sushiBg = data;
				easyDebug.info('Sushi-Pic', 'Image updated.');
			} else {
				sushiBg = "/assets/img/defaultBg.png";
				easyDebug.error('Sushi-Pic', 'Error. Applied default picture.');
			}
		});
	}, 1000*10);
	//1000 * 60 * 60 * 24