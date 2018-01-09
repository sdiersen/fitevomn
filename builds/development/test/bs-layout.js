$(document).ready(function() {
	var width = $(window).width();

	changePics();

	$(window).resize(function() {
		width = $(window).width();
		changePics();
	});
	

	function changePics() {

		if (width < 1344) {
			$("#banner1").attr("src","../images/banner/test-banner-1a.jpg");
			$("#banner2").attr("src","../images/banner/test-banner-2a.jpg");
			$("#banner3").attr("src","../images/banner/test-banner-3a.jpg");

		} else {
			$("#banner1").attr("src","../images/banner/test-banner-1b.jpg");
			$("#banner2").attr("src","../images/banner/test-banner-2b.jpg");
			$("#banner3").attr("src","../images/banner/test-banner-3b.jpg");
		}
	}

	// $("a.dropdown-toggle").hover(function ()
	// 	{
	// 		$(this).css("color", "rgba(255,102,0,.8)");
	// 		// $(this).parent().addClass("show");
	// 		// $(this).next().addClass("show");
	// 		$(this).dropdown("toggle");
	// 	},
	// 	function() {
	// 		$(this).css("color", "rgba(255,255,255,.5");
	// 		// $(this).parent().removeClass("show");
	// 		// $(this).next().removeClass("show");
	// 		// $(this).attr("aria-expanded", "false");
	// 		$(this).dropdown("toggle");
	// 	});

});