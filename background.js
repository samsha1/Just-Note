// var App_Env = 'dev';
// chrome.browserAction.onClicked.addListener(function(tab) {
//   console.log(tab);
//    chrome.tabs.sendMessage(tab.id, {text: 'pluginLoading' }, function(response){
//     if (response.loading === true) {
//       console.log('Plugin is loading.');
//     } else {
//       // chrome.tabs.create({url:"popup.html"}); 
//       window.open('popup.html');
//       //loadQuils(tab.url);
//     }
//   });
//   // console.log('Plugin is loading.');
//   // loadQuils();
// });

// function loadQuils(urls) {
//   console.log("Inside Quils: " + urls);
//   var quill = new Quill('#editor-container', {
//     debug:'info',
//     modules: {
//       toolbar: [
//         ['bold', 'italic'],
//         ['link', 'blockquote', 'code-block', 'image'],
//         [{ list: 'ordered' }, { list: 'bullet' }]
//       ]
//     },
//     placeholder: 'Compose an epic...',
//     theme: 'snow'
//   });
//   console.log(quill.getText());
// }

chrome.runtime.onInstalled.addListener(function(details) {
    chrome.tabs.query({ currentWindow: true }, function(tab) {
      for (var i = 0; i < tab.length; i++) {
        if (tab[i].url[0] !== 'c') {
          chrome.tabs.executeScript(tab[i].id, {
            file: 'content-script.js',
          });
        }
      }
    });
});
