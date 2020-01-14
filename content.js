chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  	console.log("outside of if content script")
    if( request.message === "clicked_browser_action" ) {
      var firstHref = $("a[href^='http']").eq(0).attr("href");
      console.log("From Content JS");
      console.log(firstHref);
    }
  }
);