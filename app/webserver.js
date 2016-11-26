/**
 * Web server application file
 * Created by Roguyt
 */

/**
 * Load modules
 */

	const express = require('express');

	const morgan = require('morgan');

	const easyDebug = require('./lib/easyDebug');

/**
 * Load configuration files
 */

	const config = require('./config/config');
	const configDatabase = require('./config/database');

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