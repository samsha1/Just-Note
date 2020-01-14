var quill = new Quill('#editor-container', {
    modules: {
      toolbar: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline','link'],
        ['image', 'code-block','blockquote']
      ]
    },
    placeholder: 'Compose a note...',
    theme: 'snow'  // or 'bubble'
  });