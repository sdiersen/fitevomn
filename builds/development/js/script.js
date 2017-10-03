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
	var topoffset = 50;
	$('.loader').fadeOut(1000);

	$('.navbar-fixed-top').on('activate.bs.scrollspy', function() {
		var hash = $(this).find('li.active a').attr('href');
		if (hash !== '#slideshow') {
			$('header nav').addClass('inbody');
		} else {
			$('header nav').removeClass('inbody');
		}
	});

	$('body').scrollspy({
		target: 'header .navbar',
		offset: topoffset
	});

	//Use smooth scrolling when clicking on navigation
	$('.navbar a').click(function() {
		if(location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if(target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top-topoffset+2 }, 500);
				return false;
			}
		}
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