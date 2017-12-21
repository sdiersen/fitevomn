$(document).ready(function() {
	var events = $(".myCarouselItem").toArray();
	var number_of_events = parseInt(events.length);
	var current_event = parseInt(getCurrentEvent(events));
	var timer_on = true;
	var interval;
	var timer = function() {
		interval = setInterval(function() {
			setNextEvent();
		}, 5000);
	};
	timer();
	//$("#testvalue").html(number_of_events);
	//$("#myCarouselActiveItem").html(current_event);
	$("div.myCarouselNextItem").click(function() { 
		setNextEvent();
		if (timer_on) {
			clearInterval(interval);
			timer();
		}
	 });
	$("div.myCarouselPrevItem").click(function() { 
		setPrevEvent(); 
		if (timer_on) {
			clearInterval(interval);
			timer();
		}
	});
	$("li.material-icons.myCarouselItemThumb").click(function() {
		if (timer_on) {
			timer_on = false;
			clearInterval(interval);
			$(this).html("play_arrow");
		} else {
			timer_on = true;
			timer();
			$(this).html("pause");
		}
	})
	$("li.myCarouselItemThumb").click(function () {
		var event = $(this).attr("data-carousel-thumb-item-number");
		if (event < 1) { return; }
		setEvent(event);
		if (timer_on) { 
			clearInterval(interval);
			timer();
		}
	})

	function setEvent(event) {
		if (event < 1 || event > number_of_events) {
			return;
		}
		$('.myCarouselItem[data-carousel-item-number="' + current_event + '"]').removeAttr("id");
		$('.myCarouselItemThumb[data-carousel-thumb-item-number="' + current_event + '"]').removeAttr("id");
		current_event = parseInt(event);
		$('.myCarouselItem[data-carousel-item-number="' + current_event + '"]').attr('id', 'myCarouselActiveItem');
		$('.myCarouselItemThumb[data-carousel-thumb-item-number="' + current_event + '"]').attr('id', 'myCarouselActiveItemThumb');
	}

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



