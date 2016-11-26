/**
 * Gulp configuration file
 * Created by Roguyt
 */

/**
 * Load modules
 */

	const gulp = require('gulp');
	const less = require('gulp-less');
	const concat = require('gulp-concat');
	const cleanCSS = require('gulp-clean-css');
	const uglify = require('gulp-uglify');

/**
 * Build Task
 */

	gulp.task('build', function() {
		// LESS Files
		gulp.src('./public/dev/less/public/app.less')
			.pipe(less())
			.pipe(concat('app.css'))
			.pipe(cleanCSS())
			.pipe(gulp.dest('./public/build/css'))
		;

		// JS Files
		gulp.src('./public/dev/js/public/*.js')
			.pipe(uglify({
				mangle: {
					except: [
						"socket"
					]
				}
			}))
			.pipe(gulp.dest('./public/build/js'))
		;
	});

/**
 * Watch Task
 */

	gulp.task('watch', ["build"], function() {
		gulp.watch('./public/dev/**/*', ["build"]);
	});

/**
 * Default Task
 */

	gulp.task('default', ["build"]);