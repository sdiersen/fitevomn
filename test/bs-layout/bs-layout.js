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

});