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
	var nav = document.getElementById('theNav'); 
	var navMonti = document.getElementById('navMonti');
	var boxing = document.getElementById('boxingClub');
	var startY = 0;
	var startX = 0;
	var distX = 0;
	var distY = 0;
	timer();
	//$("#testvalue").html(number_of_events);
	//$("#myCarouselActiveItem").html(current_event);
	// window.addEventListener('touchstart', function onFirstTouch() {
	// 	document.body.classList.add('user-is-touching');
	// 	window.removeEventListener('touchstart', onFirstTouch, false);
	// }, false);

	var rect = navMonti.getBoundingClientRect();
	console.log(rect.top, rect.right, rect.bottom, rect.left);
	var rect1 = boxing.getBoundingClientRect();
		console.log(rect1.top, rect1.right, rect1.bottom, rect1.left);
	nav.addEventListener('touchstart', function(e) {
		var touchobj = e.changedTouches[0];
		startX = parseInt(touchobj.clientX);
		startY = parseInt(touchobj.clientY);
		console.log("Start X: " + startX + "px\n");
		console.log("Start Y: " + startY + "px\n");		
	});

	nav.addEventListener('touchend', function(e) {
		var touchobj = e.changedTouches[0];
		distY = Math.abs(startY - parseInt(touchobj.clientY));
		console.log("Distance in Y: " + distY + "px\n");
		if (distY > 50) {
			var rect = navMonti.getBoundingClientRect();
			if (startX <= rect.right && startX >= rect.left && startY <= rect.bottom && startY >= rect.top) {
				document.getElementById('testMonti').style.display = "block";
			}
		}
	});

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



