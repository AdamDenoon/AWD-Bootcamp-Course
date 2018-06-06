$("#clickme").click(function() {
	$.getJSON("https://aws.random.cat/meow")
	.done(function(data) {
		// Update cat image
		$("#catbox").attr('src', data.file);
	})
	.fail(function() {
		alert("There was a problem retrieving the cat :(");
	});
});
