var paneindex = 0

$(document).ready(function() {

	$(document).keydown(function(e) {
		if (e.keyCode == 38)
		{
			if (paneindex > 0)
			{
				--paneindex;
				animatepanes($('.panes')[paneindex]);
			}
			e.preventDefault();
		} 
		else if (e.keyCode == 40)
		{
			if (paneindex < $('.panes').length-1)
			{
				++paneindex;
				animatepanes($('.panes')[paneindex]);
			}
			e.preventDefault();
		}
		console.log(paneindex);
	});

});

animatepanes = function(obj) {
	console.log(obj);
	$('html, body').animate({
		scrollTop: obj.offsetTop
	}, 1000, 'swing');
}