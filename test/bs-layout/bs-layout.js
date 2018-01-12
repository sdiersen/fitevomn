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
				output += "<td>" + data.Monday[current].classTime + "<br>" + data.Monday[current].className + "<br>" + data.Monday[current].classInstructor + "</td>";
			} else {
				output += "<td></td>";
			}
			if (current < data.Tuesday.length) {
				output += "<td>" + data.Tuesday[current].classTime + "<br>" + data.Tuesday[current].className + "<br>" + data.Tuesday[current].classInstructor + "</td>";
			} else {
				output += "<td></td>";
			}
			if (current < data.Wednesday.length) {
				output += "<td>" + data.Wednesday[current].classTime + "<br>" + data.Wednesday[current].className + "<br>" + data.Wednesday[current].classInstructor + "</td>";
			} else {
				output += "<td></td>";
			}
			if (current < data.Thursday.length) {
				output += "<td>" + data.Thursday[current].classTime + "<br>" + data.Thursday[current].className + "<br>" + data.Thursday[current].classInstructor + "</td>";
			} else {
				output += "<td></td>";
			}
			if (current < data.Friday.length) {
				output += "<td>" + data.Friday[current].classTime + "<br>" + data.Friday[current].className + "<br>" + data.Friday[current].classInstructor + "</td>";
			} else {
				output += "<td></td>";
			}
			if (current < data.Saturday.length) {
				output += "<td>" + data.Saturday[current].classTime + "<br>" + data.Saturday[current].className + "<br>" + data.Saturday[current].classInstructor + "</td>";
			} else {
				output += "<td></td>";
			}
			if (current < data.Sunday.length) {
				output += "<td>" + data.Sunday[current].classTime + "<br>" + data.Sunday[current].className + "<br>" + data.Sunday[current].classInstructor + "</td>";
			} else {
				output += "<td></td>";
			}
			output += "</tr>";
			current++;
		}
		$("#classInject").html(output);
	});

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