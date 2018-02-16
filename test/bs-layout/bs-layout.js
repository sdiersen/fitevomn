$(document).ready(function() { 
	var width = $(window).width();
	var location = "buffalo";
	var classType = "all";
	var instructor = "any";

	loadInstructors();
	getClassSchedule();

	$("#inputGroupSelect00").change(function() {
		location = $(this).val();
		getClassSchedule();
	});
	$("#inputGroupSelect01").change(function() {
		classType = $(this).val();
		getClassSchedule()
	})

	function getClassMatches(day) {
		var results = [];
		var counter = 0;
		while (hasMoreClasses(counter, day.length)) {
			if ((classType === "all" || classType === day[counter].classType) && (instructor === "any" || instructor === day[counter].classInstructor)) {
				results.push(day[counter]);
			}
			counter++;
		}
		return results;
	}
	//Start JQuery AJAX request for gx classes
	function getClassSchedule() {
		var locationFile = location + ".json";
		$.getJSON(locationFile, function(data) {


			var current = 0;
			var output;

			var monday = getClassMatches(data.Monday);
			var tuesday = getClassMatches(data.Tuesday);
			var wednesday = getClassMatches(data.Wednesday);
			var thursday = getClassMatches(data.Thursday);
			var friday = getClassMatches(data.Friday);
			var saturday = getClassMatches(data.Saturday);
			var sunday = getClassMatches(data.Sunday);

			var largest = mostClasses(monday.length, tuesday.length, wednesday.length, thursday.length, friday.length, saturday.length, sunday.length);

			while (hasMoreClasses(current,largest)) {
				output += "<tr>";
				if (current < monday.length) {
					output += "<td class=\"classCell mondayCell\">"
							 + monday[current].classTime 
							 + "<br><a href=\"" 
							 + monday[current].classLink 
							 + "\">"
							 + monday[current].className 
							 + "</a><br>" 
							 + monday[current].classInstructor 
							 + "</td>";
				} else {
					output += "<td></td>";
				}
				if (current < tuesday.length) {
					output += "<td class=\"classCell tuesdayCell\">"
							 + tuesday[current].classTime 
							 + "<br><a href=\"" 
							 + tuesday[current].classLink 
							 + "\">"
							 + tuesday[current].className 
							 + "</a><br>" 
							 + tuesday[current].classInstructor 
							 + "</td>";			
				} else {
					output += "<td></td>";
				}
				if (current < wednesday.length) {
					output += "<td class=\"classCell wednesdayCell\">"
							 + wednesday[current].classTime 
							 + "<br><a href=\"" 
							 + wednesday[current].classLink 
							 + "\">"
							 + wednesday[current].className 
							 + "</a><br>" 
							 + wednesday[current].classInstructor 
							 + "</td>";
				} else {
					output += "<td></td>";
				}
				if (current < thursday.length) {
					output += "<td class=\"classCell thursdayCell\">"
							 + thursday[current].classTime 
							 + "<br><a href=\"" 
							 + thursday[current].classLink 
							 + "\">"
							 + thursday[current].className 
							 + "</a><br>" 
							 + thursday[current].classInstructor 
							 + "</td>";
				} else {
					output += "<td></td>";
				}
				if (current < friday.length) {
					output += "<td class=\"classCell fridayCell\">"
							 + friday[current].classTime 
							 + "<br><a href=\"" 
							 + friday[current].classLink 
							 + "\">"
							 + friday[current].className 
							 + "</a><br>" 
							 + friday[current].classInstructor 
							 + "</td>";
				} else {
					output += "<td></td>";
				}
				if (current < saturday.length) {
					output += "<td class=\"classCell saturdayCell\">"
							 + saturday[current].classTime 
							 + "<br><a href=\"" 
							 + saturday[current].classLink 
							 + "\">"
							 + saturday[current].className 
							 + "</a><br>" 
							 + saturday[current].classInstructor 
							 + "</td>";
				} else {
					output += "<td></td>";
				}
				if (current < sunday.length) {
					output += "<td class=\"classCell sundayCell\">"
							 + sunday[current].classTime 
							 + "<br><a href=\"" 
							 + sunday[current].classLink 
							 + "\">"
							 + sunday[current].className 
							 + "</a><br>" 
							 + sunday[current].classInstructor 
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
	}
	

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

	function mostClasses(mo, tu, we, th, fr, sa, su) {
		var largest = mo;
		if (tu > largest) { largest = tu; }
		if (we > largest) { largest = we; }
		if (th > largest) { largest = th; }
		if (fr > largest) { largest = fr; }
		if (sa > largest) { largest = sa; }
		if (su > largest) { largest = su; }
		return largest;
	}

	function hasMoreClasses(current, largest) {
		return largest > current;
	}

	function loadInstructors() {
		var output = "<div class=\"input-group-prepend\"><label class=\"input-group-text\" for=\"inputGroupSelect02\">Instructors:</label></div>";
		output += "<select class=\"custom-select\" id=\"inputGroupSelect02\">";
		output += "<option value=\"any\" selected>Any</option>";
		$.getJSON("instructors.json", function(data) {
			var current = 0;
			while(current < data.instructor.length) {
				// output += "<option value=\"";
				// output += data.instructor[current];
				// output += "\">";
				// output += data.instructor[current];
				// output += "</option>";
				output += "hello ";
				++current;
			}
			output += "</select>";
		});
		$("#instructorsSelect").html(output);
	}
});