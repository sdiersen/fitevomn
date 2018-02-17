$(document).ready(function() { 
	var width = $(window).width();
	var location = "buffalo";
	var classType = "all";
	var instructor = "Any";
	var date = new Date();
	var scheduleDay = date.getDay();
	var scheduleLongDay = getLongDay(scheduleDay);

	if ($(document).width() < 768) { setXSClassDay(); getClassScheduleDay(scheduleDay); }
	// var monticelloJSON = [];
	// var buffaloJSON = [];
	// var zimmermanJSON = [];
	// var instructorJSON;

	// getLocationJSON();
	// getInstructorJSON();
	

	loadInstructors();
	getClassSchedule();


	function getClassMatches(day) {
		var results = [];
		var counter = 0;
		while (hasMoreClasses(counter, day.length)) {
			if ((classType === "all" || classType === day[counter].classType) && (instructor === "Any" || instructor === day[counter].classInstructor)) {
				results.push(day[counter]);
			}
			counter++;
		}
		return results;
	}


	//Start JQuery AJAX request for gx classes
	function getClassSchedule() {
		
		$.getJSON(location + ".json", function(data) {

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

			if (largest === 0) {
				output = "";
			}

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

	function getClassScheduleDay(day) {
		$.getJSON(location + ".json", function(data) {
			var current = 0;
			var output;
			var sched;
			switch (day) {
				case 0:
					sched = getClassMatches(data.Sunday);
					break;
				case 1:
					sched = getClassMatches(data.Monday);
					break;
				case 2:
					sched = getClassMatches(data.Tuesday);
					break;
				case 3:
					sched = getClassMatches(data.Wednesday);
					break;
				case 4: 
					sched = getClassMatches(data.Thursday);
					break;
				case 5:
					sched = getClassMatches(data.Friday);
					break;
				case 6:
					sched = getClassMatches(data.Saturday);
					break;
			}
			if (sched.length === 0 ) { output = ""; }
			while (current < sched.length) {
				output += "<tr>"
						+ "<td style=\"text-align:center\">"
						+ sched[current].classTime 
						+ "<br><a href=\"" 
						+ sched[current].classLink 
						+ "\">"
						+ sched[current].className 
						+ "</a><br>" 
						+ sched[current].classInstructor 
						+ "</td>"
						+ "</tr>";
				current++;
			}
			$("#xsClassSchedule").html(output);

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
		
		$.getJSON("instructors.json", function(data) {
			var current = 0;
			var output;
			while(current < data.instructor.length) {
				if (data.instructor[current].club === location) {
					output += "<option value=\"";
					output += data.instructor[current].name;
					output += "\"";
					if (data.instructor[current].name === instructor) {
						output += " selected";
					}
					output += ">";
					output += data.instructor[current].name;
					output += "</option>";
				}
				current++;
			}
			if ($(window).width() < 768) {
				$("#xsInstructors").html(output);
			} else {
				$("#inputGroupSelect02").html(output);
			}
		});
		
	}

	function getLongDay(day) {
		switch (day) {
			case 0:
				return "Sunday";
			case 1:
				return "Monday";
			case 2:
				return "Tuesday";
			case 3:
				return "Wednesday";
			case 4:
				return "Thursday";
			case 5:
				return "Friday";
			case 6:
				return "Saturday";
		}
	}
	$(window).resize(function() {
		loadInstructors();
		getClassSchedule();
		setXSClassDay();
		getClassScheduleDay(scheduleDay);
	});

	$("#xsDatePrevious").click(function() {
		scheduleDay = (scheduleDay + 6) % 7;
		scheduleLongDay = getLongDay(scheduleDay);
		setXSClassDay(); 
		getClassScheduleDay(scheduleDay);
	});

	$("#xsDateNext").click(function() {
		scheduleDay = (scheduleDay + 1) % 7;
		scheduleLongDay = getLongDay(scheduleDay);
		setXSClassDay();
		getClassScheduleDay(scheduleDay);
	});
	$("#xsLocation").change(function() {
		location = $(this).val();
		loadInstructors();
		getClassScheduleDay(scheduleDay);
	});
	$("#xsInstructors").change(function() {
		instructor = $(this).val();
		loadInstructors();
		getClassScheduleDay(scheduleDay);
	});
	$("#xsClassType").change(function() {
		classType = $(this).val();
		getClassScheduleDay(scheduleDay);
	});
	$("#inputGroupSelect00").change(function() {
		location = $(this).val();
		loadInstructors();
		getClassSchedule();
	});
	$("#inputGroupSelect01").change(function() {
		classType = $(this).val();
		getClassSchedule();
	});
	$("#inputGroupSelect02").change(function() {
		instructor = $(this).val();
		loadInstructors();
		getClassSchedule();
	});

	function setXSClassDay() {
		$("#xsClassDay").html(scheduleLongDay);
	}
});