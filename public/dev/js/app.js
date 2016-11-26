$(document).ready(function() {
	$('body').css('background-image', 'url("' + sushiBg + '")');
	var diffDate = ((new Date().getTime()) - (date.getTime())) / 1000;
	var clock = new FlipClock($('.timer'), diffDate, {
		clockFace: 'DailyCounter'
	});
});