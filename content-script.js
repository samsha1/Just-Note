chrome.runtime.sendMessage({}, function(response) {
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  	console.log("Received In content...............................");
  		if (request.text === "pluginLoading") {
			console.log("Received In content");
			sendResponse({loading: false});
	}
});