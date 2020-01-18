chrome.runtime.sendMessage({}, function(response) {
});

// chrome.storage.local.get('quillText', (response) => {
// 	console.log("Getting local storage");
// 	if (response.quillText) {
// 	  console.log(response.quillText);
// 	}
//   });

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
		console.log("From Content Script" + request.quillText);
	return true;
});

// document.addEventListener('click', () => alert('Click occurred!'));
