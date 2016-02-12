function contactIn() {
	if (Modernizr.history) {
		$("#about-button").removeClass("faded-in").addClass("faded-out");
		$("#contact-button").removeClass("faded-out").addClass("faded-in");
		$(".contact").removeClass("contact-out").addClass("contact-in");
		$(".about").removeClass("about-in").addClass("about-out");
		if (window.location.href=="http://www.mewalton.co.uk/")
			history.pushState(null, null, "http://www.mewalton.co.uk/contact/");
	} else {
		window.location.href = "http://www.mewalton.co.uk/contact/";
	}
};
    
function aboutIn() {
	if (Modernizr.history) {
		$("#about-button").removeClass("faded-out").addClass("faded-in");
		$("#contact-button").removeClass("faded-in").addClass("faded-out");
		$(".contact").removeClass("contact-in").addClass("contact-out");
		$(".about").removeClass("about-out").addClass("about-in");
		if (window.location.href=="http://www.mewalton.co.uk/contact/")
			history.pushState(null, null, "http://www.mewalton.co.uk/");
	} else {
		window.location.href = "http://www.mewalton.co.uk/";
	} 
};

function contactInBack() {
	$("#about-button").removeClass("faded-in").addClass("faded-out");
	$("#contact-button").removeClass("faded-out").addClass("faded-in");
	$(".contact").removeClass("contact-out").addClass("contact-in");
	$(".about").removeClass("about-in").addClass("about-out");
	$(document).unbind("keydown.arrowkey");
	$(document).bind("keydown.arrowkey", "left", function(){leftKeyShortcut()});
};
    
function aboutInBack() {
	$("#about-button").removeClass("faded-out").addClass("faded-in");
	$("#contact-button").removeClass("faded-in").addClass("faded-out");
	$(".contact").removeClass("contact-in").addClass("contact-out");
	$(".about").removeClass("about-out").addClass("about-in");
	$(document).unbind("keydown.arrowkey");
	$(document).bind("keydown.arrowkey", "right", function(){rightKeyShortcut()});
};

function randomColor() {
	
	var color1 = "rgba(35, 85, 255, 1)"; // Blue
	var color2 = "rgba(0, 221, 92, 1)"; // Green
	var color3 = "rgba(255, 30, 0, 1)"; // Red
	var color4 = "rgba(255, 180, 0, 1)"; // Orange
	var color5 = "rgba(255, 54, 153, 1)"; // Pink
		
	var colors = [color1, color2, color3, color4, color5];
	// var backgroundColors = new Array("#f6511d", "#ffb400", "#00a6ed", "#7fb800", "#9a39d3");
	
	var randomNumber = Math.floor(Math.random()*colors.length)
	
	document.body.style.backgroundColor=colors[randomNumber];

}

function setColorInterval() {
	colorInterval = setInterval (function(){randomColor()}, 10000);
}

function rKeyShortcut() {
	randomColor()
	clearInterval(colorInterval)
	setColorInterval()
}

function rightKeyShortcut() {
	if (Modernizr.history) {
		contactIn()
		$(document).unbind("keydown.arrowkey");
		$(document).bind("keydown.arrowkey", "left", function(){leftKeyShortcut()});
	} else {
		contactIn()
	}
}

function leftKeyShortcut() {
	if (Modernizr.history) {
		aboutIn()
		$(document).unbind("keydown.arrowkey");
		$(document).bind("keydown.arrowkey", "right", function(){rightKeyShortcut()});
	} else {
		aboutIn()
	}
}

window.onload = function() {

$("body").css({"-webkit-transition-property":"background-color", "-webkit-transition-duration":"3s", "-o-transition-property":"background-color", "-o-transition-duration":"3s", "-transition-property":"background-color", "-transition-duration":"3s"});

if (Modernizr.history) {
	window.setTimeout(function() {
		window.addEventListener("popstate", function(e) {
			if (window.location.href=="http://www.mewalton.co.uk/")
			{
			aboutInBack()
			} else {
			contactInBack()
			}
		}, false);
	 }, 1);
}
}