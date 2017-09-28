$(document).ready(function() {

	

	// $('#headerRow').css('height', carouselMaxHeight());

	$('#headerCarousel').carousel();

	// $(window).resize(function() {
	// 	var winWidth = $(this).width();
	// 	if (winWidth < 768) {
	// 		$('#carouselWrapper').addClass('flex-last');
	// 		$('.picStyle').css('max-width', '400px');
	// 		$('#headerRow').css('height', (3 * carouselMaxHeight()));
	// 	} else {
	// 		$('#carouselWrapper').removeClass('flex-last');
	// 		$('.picStyle').css('max-width', '');
	// 		$('#headerRow').css('height', carouselMaxHeight());
	// 	}
		
	// });
	$('#headerCarousel').on('slid.bs.carousel', function() {
		clearSpecialEventLink();
		var id = $('#headerCarousel div div.active img').attr('id');
		var loc = '#' + $('#headerCarousel div div.active img').attr('data-club-location');
		$(loc + ' li span').html(id);

	});
});


// function carouselMaxHeight() {
// 	var max_height = 0;
// 	$('#headerCarousel div div img').each(function() {
// 		var cur_height = $(this).height();
// 		if(cur_height > max_height) {
// 			max_height = cur_height;
// 		}
// 	});
// 	return max_height + 10;
// }

function clearSpecialEventLink() {
	$('#location-buffalo li span').empty();
	$('#location-monticello li span').empty();
	$('#location-zimmerman li span').empty();
}