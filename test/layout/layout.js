$(document).ready(function() {
	var events = $(".myCarouselItem").toArray();
	var number_of_events = events.length;
	var current_event = getCurrentEvent(events);
	$("#testvalue").html("hello");
	$("#myCarouselActiveItem").html(current_event);
	$("div.myCarouselNextItem").click(function() {
		$(this).css({"background-color":"black"});
	});

	var counter = 0;
});
function getCurrentEvent(events) {
	// $.each(events, function(key, value) {
	// 	var blah = value;
	// 	// if(value.indexOf("myCarouselActiveItem") >= 0) {

	// 	// 	return key;
	// 	// }
	// 	$("div.myCarouselPrev").append(blah);
	// });
	// return 53;
	var data = $(":contains('myCarouselActiveItem')").attr("data-carousel-item-number");
	return data;
}
function setNextEvent(event) {

}

function setPrevEvent(event) {

}
