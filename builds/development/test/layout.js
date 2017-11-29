$(document).ready(function() {
	var events = $(".myCarouselItem").toArray();
	var number_of_events = parseInt(events.length);
	var current_event = parseInt(getCurrentEvent(events));
	$("#testvalue").html(number_of_events);
	$("#myCarouselActiveItem").html(current_event);
	$("div.myCarouselNextItem").click(function() { setNextEvent(); });
	$("div.myCarouselPrevItem").click(function() { setPrevEvent(); });

	function setNextEvent() {
		$('.myCarouselItem[data-carousel-item-number="' + current_event + '"]').removeAttr("id");
		$('.myCarouselItemThumb[data-carousel-thumb-item-number="' + current_event + '"]').removeAttr("id");
		current_event += 1;
		if(current_event > number_of_events) { current_event = 1; }
		$('.myCarouselItem[data-carousel-item-number="' + current_event + '"]').attr('id', 'myCarouselActiveItem');
		$('.myCarouselItemThumb[data-carousel-thumb-item-number="' + current_event + '"]').attr('id', 'myCarouselActiveItemThumb');
		
	}
	function setPrevEvent() {
		$('.myCarouselItem[data-carousel-item-number="' + current_event + '"]').removeAttr("id");
		$('.myCarouselItemThumb[data-carousel-thumb-item-number="' + current_event + '"]').removeAttr("id");
		current_event -= 1;
		if(current_event < 1) { current_event = number_of_events; }
		$('.myCarouselItem[data-carousel-item-number="' + current_event + '"]').attr('id', 'myCarouselActiveItem');
		$('.myCarouselItemThumb[data-carousel-thumb-item-number="' + current_event + '"]').attr('id', 'myCarouselActiveItemThumb');
	}	
});
function getCurrentEvent(events) {
	var data = $("#myCarouselActiveItem").attr("data-carousel-item-number");
	return data;
}



