var paneindex = 0

$(document).ready(function() {

	$(document).keydown(function(e) {
		switch(e.keyCode)
		{
			case 38: 
				if (paneindex > 0)
					--paneindex;
				animatepanes();
				break;
			case 40:
				++paneindex;
				animatepanes();
				break;
		}
	});

	window.addEventListener("keydown", function(e) {
		if ([38, 40].indexOf(e.keyCode) > -1)
		{
			e.preventDefault();
		}
	}, false);

	$('#down').click(function() {
		console.log("hi");
		paneindex++;
		animatepanes(paneindex);
	});

	$('#up').click(function() {
		console.log("hi");
		if (paneindex > 0)
			--paneindex;
		animatepanes(paneindex);	
	});

});

animatepanes = function(paneindex) {
	$('html, body').animate({
		scrollTop: $('.panes')[paneindex].offsetTop
	}, 1000, 'swing');
}