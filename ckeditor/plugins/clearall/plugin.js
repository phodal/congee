CKEDITOR.plugins.add("clearall",
  {
    require: 'notification',
    icons: 'clearall',
    init: function (editor) {
      editor.addCommand('clearall', {
        modes: {wysiwyg: 1, source: 1},
        exec: function (editor) {
          editor.setData('');
        },
        canUndo: false
      });

      editor.ui.addButton && editor.ui.addButton('ClearAll', {
        label: "清空文档",
        command: 'clearall',
        toolbar: 'insert,50'
      });
    }
  });
