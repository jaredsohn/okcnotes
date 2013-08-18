chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {

		clearInterval(readyStateCheckInterval);

    notes = document.createElement("notes");

    notes.innerHTML = '<p id="" class="btn  small white " style="" onmousedown="util.toggleClass(this, \'active\')" onmouseup="util.toggleClass(this, \'active\')" onmouseover="util.toggleClass(this, \'hover\')" onmouseout="util.toggleClass(this, \'hover\')"><a href="" id="save_unsave" class="" style="" onclick="Profile.loadWindow(\'edit_notes\'); return false;" target="" tabindex="">Notes</a></p>';

    actions = document.getElementById("actions").appendChild(notes);

	}
	}, 10);
});
