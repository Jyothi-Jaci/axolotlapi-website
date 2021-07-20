let pictures, facts;

let picturesIndex, factsIndex;

let pictureElem, factElem;

function setPicture(i) {
	while (i < 0) { i += pictures.length; }
	while (i >= pictures.length) { i -= pictures.length; }

	pictureElem.attr("src", pictures[i]);
}

function setFact(i) {
	while (i < 0) { i += facts.length; }
	while (i >= facts.length) { i -= facts.length; }

	factElem.html(facts[i]);
}

$(document).ready(async function() {
	pictures = await getPictures();
	facts = await getFacts();

	pictureElem = $("#axolotl-api-picture");
	factElem = $("#axolotl-api-fact");

	setPicture(picturesIndex = Math.floor(Math.random() * pictures.length));
	setFact(factsIndex = Math.floor(Math.random() * facts.length));

	$("a").click(function() {
		if ($(this).hasClass("axolotl-api-picture")) {
			// Go through pictures
			if ($(this).hasClass("next")) {
				setPicture(++picturesIndex);
			} else {
				setPicture(--picturesIndex);
			}
		} else if ($(this).hasClass("axolotl-api-fact")) {
			// Go through facts
			if ($(this).hasClass("next")) {
				setFact(++factsIndex);
			} else {
				setFact(--factsIndex);
			}
		}
	});
	
	$("#picture-image").attr("style", $("#picture-image").attr("style") + "height: calc(100% - " + $("#picture-action").height() + "px);");
});
