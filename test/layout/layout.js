$(document).ready(function() {
	var events = $(".myCarouselItem").toArray();
	var number_of_events = events.length;
	var current_event = getCurrentEvent(events);

	$("#myCarouselActiveItem").html(current_event);

	var counter = 0;
});
function getCurrentEvent(events) {
	$.each(events, function(key, value) {
		if(value.match("myCarouselActiveItem")) {
			return key;
		}
	});
	return 0;
}
function setNextEvent(event) {

}

function setPrevEvent(event) {

}
