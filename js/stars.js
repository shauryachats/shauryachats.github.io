NUMBER_OF_STARS = 75

WINDOW_WIDTH = $(window).width();
WINDOW_HEIGHT = $(window).height();

createStar = function(top, left, far)
{
	var obj = $('<div>').attr({
		'class' : 'stars'
	}).appendTo('.panes:eq(1)');

	obj.css('top', top);
	obj.css('left', left);
	obj.css('height', far);
	obj.css('width', far);
}

randomLeft = function() {
	return Math.floor(WINDOW_WIDTH * Math.random());
}

randomTop = function() {
	return Math.floor(WINDOW_HEIGHT * Math.random());
}

randomFar = function() {
	return Math.floor(10 * Math.random());
}

function runStarAnimation()
{
	for (var i = 0; i < NUMBER_OF_STARS; ++i)
		createStar(randomTop(), randomLeft(), randomFar());

	//animate the stars!
	$('.stars').each(function setAnim() {
		//console.log($(this).position().top);
		if ($(this).position().top < 0)
		{
			$(this).css('top', WINDOW_HEIGHT);
			$(this).css('left', randomLeft());
		}
		var speed = 2*$(this).width();
		$(this).animate({
			top: "-=" + speed
		},100, 'linear', setAnim);
	});
}

$(document).ready(runStarAnimation);