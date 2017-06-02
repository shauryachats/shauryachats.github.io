var paneindex = 0

animatepanes = function() {
	$('html, body').animate({
		scrollTop: $('.panes')[paneindex].offsetTop
	}, 1000, 'swing');
}

panedown = function() {
	if (paneindex < $('.panes').length-1)
	{
		++paneindex;
		animatepanes();
	}
}

paneup = function() {
	if (paneindex > 0)
	{
		--paneindex;
		animatepanes();
	}
}

$(document).keydown(function(e) {
	if (e.keyCode == 38) //up arrow key
	{
		paneup();
		e.preventDefault();
	} 
	else if (e.keyCode == 40) //down arrow key
	{
		panedown();
		e.preventDefault();
	}
	console.log(paneindex);
});

//makes the page on top after every refresh
$(window).on('beforeunload', function(){
  $(window).scrollTop(0);
});

//for mobile browsers
$('html, body').swipe({
	swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
		if (direction == 'down')
			paneup();
		else if (direction == 'up')
			panedown();
	}
});
