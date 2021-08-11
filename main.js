if (window.location.hostname != "theaxolotlapi.netlify.app") {
	if (window.location.pathname != "/axolotlapi-website/contribute.html" && window.location.protocol != "file:") {
		window.location.href = "axolotlbasics.html";
	}

	$(document).ready(function() {
		$("<h5>Please keep in mind this is the development branch, content on this page does not represent the actual page.<br>To visit the actual website, <a href=\"https://theaxolotlapi.netlify.app\" class=\"btn\">click here</a></h5>").insertBefore("main");
	});
}