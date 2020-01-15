chrome.runtime.sendMessage({}, function(response) {
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  	console.log("Received In content...............................");
  		if (request.text === "pluginLoading") {
			console.log("Received In content");
			sendResponse({loading:true});
	}

	return true;
});


chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		console.log("From Content Script");
		if(request.changeText.length() > 0){
			console.log("From Content Script:" + request.changeText);
		}

	return true;
});

// document.addEventListener('click', () => alert('Click occurred!'));
