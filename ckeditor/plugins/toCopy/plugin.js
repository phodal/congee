CKEDITOR.plugins.add("tocopy",
  {
    require: 'notification',
    icons: 'tocopy',
    init: function (editor) {
      editor.addCommand('tocopy', {
        modes: {wysiwyg: 1, source: 1},
        exec: function (editor) {
          editor.setData( '' );
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
