var Delta = Quill.import('delta');
SCRIPTS = [
  "button.js"
]
document.addEventListener("DOMContentLoaded", function(event) {
  var quill = new Quill('#editor-container', {
    modules: {
      toolbar: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline','link','blockquote','code-block']      ]
    },
    placeholder: 'Compose a note...',
    theme: 'snow'  // or 'bubble'
  });

  quill.setContent(chrome.storage.local.get('quillText'));

   var change = new Delta();
   quill.on('selection-change', function(range, oldRange, source) {
        let quillText = quill.getText();
        chrome.storage.local.set({ quillText });
      });

  //  quill.on('text-change',function(delta){
  //     console.log("here we are");
  //     change = change.compose(delta);
  // });

  //setInterval(checkLength,5*1000);
  
  function checkLength(){
    if(change){
      console.log('Saving changes',quill.getText());
      sendContent(quill.getText());
      change = new Delta();
    }
  }

  

// Check for unsaved data
  window.onbeforeunload = function() {
    if (change) {
      alert("Chages is not saved Please Wait!");
    }
  }

  function sendContent(changeText){
    console.log("From send Content");
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { changeText });
    });
  }
});

//document.querySelector('#editor-container').addEventListener('oninput')


// function showResults(results) {
//     var resultsElement = document.getElementById("results");
//     resultsElement.innerText = results ? "This page uses jQuery" : "This page does NOT use jQuery";
// }

// function loadQuils(){
    
//}