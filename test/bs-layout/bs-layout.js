$(document).ready(function() { 
	var width = $(window).width();

	//Start JQuery AJAX request for gx classes
	$.getJSON("monticello.json", function(data) {
		console.log(data); 
		console.log(data.Monday.length);
		console.log(data.Monday[0].className);

		var largest = mostClasses(data);
		var current = 0;
		var output;
		while (hasMoreClasses(current,largest)) {
			output += "<tr>";
			if (current < data.Monday.length) {
				output += "<td class=\"classCell mondayCell\">"
						 + data.Monday[current].classTime 
						 + "<br><a href=\"" 
						 + data.Monday[current].classLink 
						 + "\">"
						 + data.Monday[current].className 
						 + "</a><br>" 
						 + data.Monday[current].classInstructor 
						 + "</td>";
			} else {
				output += "<td></td>";
			}
			if (current < data.Tuesday.length) {
				output += "<td class=\"classCell tuesdayCell\">"
						 + data.Tuesday[current].classTime 
						 + "<br><a href=\"" 
						 + data.Tuesday[current].classLink 
						 + "\">"
						 + data.Tuesday[current].className 
						 + "</a><br>" 
						 + data.Tuesday[current].classInstructor 
						 + "</td>";			
			} else {
				output += "<td></td>";
			}
			if (current < data.Wednesday.length) {
				output += "<td class=\"classCell wednesdayCell\">"
						 + data.Wednesday[current].classTime 
						 + "<br><a href=\"" 
						 + data.Wednesday[current].classLink 
						 + "\">"
						 + data.Wednesday[current].className 
						 + "</a><br>" 
						 + data.Wednesday[current].classInstructor 
						 + "</td>";
			} else {
				output += "<td></td>";
			}
			if (current < data.Thursday.length) {
				output += "<td class=\"classCell thursdayCell\">"
						 + data.Thursday[current].classTime 
						 + "<br><a href=\"" 
						 + data.Thursday[current].classLink 
						 + "\">"
						 + data.Thursday[current].className 
						 + "</a><br>" 
						 + data.Thursday[current].classInstructor 
						 + "</td>";
			} else {
				output += "<td></td>";
			}
			if (current < data.Friday.length) {
				output += "<td class=\"classCell fridayCell\">"
						 + data.Friday[current].classTime 
						 + "<br><a href=\"" 
						 + data.Friday[current].classLink 
						 + "\">"
						 + data.Friday[current].className 
						 + "</a><br>" 
						 + data.Friday[current].classInstructor 
						 + "</td>";
			} else {
				output += "<td></td>";
			}
			if (current < data.Saturday.length) {
				output += "<td class=\"classCell saturdayCell\">"
						 + data.Saturday[current].classTime 
						 + "<br><a href=\"" 
						 + data.Saturday[current].classLink 
						 + "\">"
						 + data.Saturday[current].className 
						 + "</a><br>" 
						 + data.Saturday[current].classInstructor 
						 + "</td>";
			} else {
				output += "<td></td>";
			}
			if (current < data.Sunday.length) {
				output += "<td class=\"classCell sundayCell\">"
						 + data.Sunday[current].classTime 
						 + "<br><a href=\"" 
						 + data.Sunday[current].classLink 
						 + "\">"
						 + data.Sunday[current].className 
						 + "</a><br>" 
						 + data.Sunday[current].classInstructor 
						 + "</td>";
			} else {
				output += "<td></td>";
			}
			output += "</tr>";
			current++;
		}
		$("#classInject").html(output);
		greyDays();
	});

	function greyDays() {
		var date = new Date();
		var dayNumber = date.getDay();

		//Add grey to all days 
		$(".mondayCell").addClass("obscure");
		$(".tuesdayCell").addClass("obscure");
		$(".wednesdayCell").addClass("obscure");
		$(".thursdayCell").addClass("obscure");
		$(".fridayCell").addClass("obscure");
		$(".saturdayCell").addClass("obscure");
		$(".sundayCell").addClass("obscure");

		switch (dayNumber) {
			case 0:
				$(".sundayCell").removeClass("obscure");
				break;
			case 1:
				$(".mondayCell").removeClass("obscure");
				break;
			case 2:
				$(".tuesdayCell").removeClass("obscure");
				break;
			case 3:
				$(".wednesdayCell").removeClass("obscure");
				break;
			case 4:
				$(".thursdayCell").removeClass("obscure");
				break;
			case 5:
				$(".fridayCell").removeClass("obscure");
				break;
			case 6:
				$(".saturdayCell").removeClass("obscure");
				break;	
		}
	}

	function mostClasses(data) {
		var largest = data.Monday.length;
		if (data.Tuesday.length > largest) {
			largest = data.Tuesday.length;
		}
		if (data.Wednesday.length > largest) {
			largest = data.Wednesday.length;
		}
		if (data.Thursday.length > largest) {
			largest = data.Thursday.length;
		}
		if (data.Friday.length > largest) {
			largest = data.Friday.length;
		}
		if (data.Saturday.length > largest) {
			largest = data.Saturday.length;
		}
		if (data.Sunday.length > largest) {
			largest = data.Sunday.length;
		}
		return largest;
	}

	function hasMoreClasses(current, largest){
		return largest > current;

	}
});