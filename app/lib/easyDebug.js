/**
 * easyDebug
 * A small library for a better debbuging
 * Created by ROguyt
 */

var self = module.exports = {
	/**
	 * Display an info message
	 * @param  {text} source Origin of info
	 * @param  {text} text   Text of info
	 * @return {void}
	 */
	info: function(source, text) {
		console.log('[i][' + source + '] ' + text);
	},
	/**
	 * Display an error message
	 * @param  {text} source Origin of error
	 * @param  {text} text   Text of error
	 * @return {void}
	 */
	error: function(source, text) {
		console.log('[e][' + source + '] ' + text);
	}
};