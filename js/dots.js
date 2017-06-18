angle = [];
speedx = [];
radius = 30;
NUMBER_OF_DOTS = 7;

centerX = 1100
centerY = 950
gap = 30

FPS = 100;

animate = function() {

	for (var i = 0; i < NUMBER_OF_DOTS; ++i)
		angle[i] += speedx[i]*Math.PI/180;

	//move the elements
	$('.dots').each(function(i) {
		$(this).animate({
			left : centerX + radius*Math.cos(angle[i]),
			//top : centerY + radius*Math.sin(angle[i])
		}, 1, 'swing');
	});

}

$(document).ready(function() {
	
	//initialise everything.
	for (var i = 0; i < NUMBER_OF_DOTS; ++i)
	{
		$('.panes:nth-child(2)').append('<div class="dots"></dots>');
		angle.push(i*Math.PI);
		speedx.push(5*Math.random()+1);
	}

	//set dots to the initial position
	var i = 0;
	$('.dots').each(function(i) {
		$(this).css({
			'top' : (centerY + gap*i) + 'px',
			'left' : centerX + 'px'	
		});
		++i;
	});

	refreshID = setInterval(animate, 1000/FPS);
});

