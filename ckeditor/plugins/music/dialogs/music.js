CKEDITOR.dialog.add( 'music', function( editor ) {
  return {
    title: "Music",
    minWidth: 270,
    minHeight: 120,
    contents: [ {
      id: 'music',
      label: '',
      title: '',
      expand: true,
      padding: 0,
      elements: [
        {
          type: 'html',
          html: 'Hello, World'
        }
      ]
    } ],
    buttons: [ CKEDITOR.dialog.cancelButton, CKEDITOR.dialog.okButton ]
  };

} );
