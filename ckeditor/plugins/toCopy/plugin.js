CKEDITOR.plugins.add("tocopy",
  {
    require: 'notification',
    icons: 'tocopy',
    init: function (editor) {
      editor.addCommand('tocopy', {
        modes: {wysiwyg: 1, source: 1},
        exec: function (editor) {
          editor.document.$.execCommand( 'SelectAll', false, null );
          setTimeout(function () {
            editor.document.$.execCommand('Copy');
          }, 0);
        },
        canUndo: false
      });

      editor.ui.addButton && editor.ui.addButton('tocopy', {
        label: "复制全部",
        command: 'tocopy',
        toolbar: 'insert,50'
      });
    }
  });
