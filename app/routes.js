/**
 * Routes configuration file
 * Created by Roguyt
 */

/**
 * Load modules
 */

	const fs = require('fs');
	const request = require('request');

	const easyDebug = require('./lib/easyDebug');

/**
 * Initialization variables
 */

	let sushiBg = "/assets/img/defaultBg.png";

/**
 * Utils functions
 */

	function getLatestPicSushi(callback) {
		request('https://www.reddit.com/r/sushi.json', (err, res, body) => {
			if (!err && res.statusCode == 200) {
				let data = JSON.parse(body);
					data = data.data.children;
				data = data.filter((post) => {
					return post.data.selftext === "";
				});
				data = data[0].data.preview.images[0].source.url;
				
				callback(null, data);
			} else {
				callback("error", null);
			}
		});
	}

/**
 * Auto download sushi picture
 */

	setInterval(() => {
	}, 1000*15);

		getLatestPicSushi((error, data) => {
			if (error === null) {
				sushiBg = data;
				easyDebug.info('Sushi-Pic', 'Image updated.');
			} else {
				sushiBg = "/assets/img/defaultBg.png";
				easyDebug.error('Sushi-Pic', 'Error. Applied default picture.');
			}
		});
	//1000 * 60 * 60 * 24

var self = module.exports = function(app) {
	/**
	 * /
	 * Home page
	 */
	app.get('/', (req, res) => {
		fs.readFile(__dirname + '/config/date.txt', (err, date) => {
			if (!err) {
				res.render('index.ejs', {
					"sushiBg": sushiBg,
					"date": date
				});
			} else {
				res.redirect('/error');
			}
		});
	});

	app.get('/error', (req, res) => {
		res.render('error.ejs', {});
	});

	/**
	 * /update
	 * Update timestamp when Harry eat Sushi
	 */
	app.get('/update', (req, res) => {
		if (req.headers.harrytoken == "Kuroyukihime") {
			let date = Date.now();
			console.log(new Date());
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