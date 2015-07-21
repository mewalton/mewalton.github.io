function contactIn() {
	if (Modernizr.history) {
		$("#about-button").removeClass("faded-in").addClass("faded-out");
		$("#contact-button").removeClass("faded-out").addClass("faded-in");
		$(".contact").removeClass("contact-out").addClass("contact-in");
		$(".about").removeClass("about-in").addClass("about-out");
		if (window.location.href=="http://mewalton.co.uk" || window.location.href=="http://mewalton.github.io/")
			history.pushState(null, null, "contact");
	} else {
		window.location.href = "http://mewalton.co.uk/contact";
	}
};
    
function aboutIn() {
	if (Modernizr.history) {
		$("#about-button").removeClass("faded-out").addClass("faded-in");
		$("#contact-button").removeClass("faded-in").addClass("faded-out");
		$(".contact").removeClass("contact-in").addClass("contact-out");
		$(".about").removeClass("about-out").addClass("about-in");
		if (window.location.href=="http://mewalton.co.uk/contact")
			history.pushState(null, null, "http://mewalton.co.uk");
		else if (window.location.href=="http://mewalton.github.io/contact")
			history.pushState(null, null, "http://mewalton.github.io");
	} else {
		window.location.href = "http://mewalton.co.uk";
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
	
	var color1 = "rgb(19, 34, 40)"; // dark blue
	var color2 = "rgb(246, 81, 29)"; // red
	var color3 = "rgb(255, 180, 0)"; // yellow
	var color4 = "rgb(0, 166, 237)"; // blue
	var color5 = "rgb(119, 184, 60)"; // green
	var color6 = "rgb(139, 58, 165)"; // purple
		
	var colors = [color1, color2, color3, color4, color5, color6];
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
$("a").css({"-webkit-transition-property":"color", "-webkit-transition-duration":"3s", "-o-transition-property":"color", "-o-transition-duration":"3s", "-transition-property":"color", "-transition-duration":"3s"});


if (Modernizr.history) {
	window.setTimeout(function() {
		window.addEventListener("popstate", function(e) {
			if (window.location.href=="http://mewalton.co.uk" || window.location.href=="http://mewalton.github.io/")
			{
			aboutInBack()
			} else {
			contactInBack()
			}
		}, false);
	 }, 1);
}
}