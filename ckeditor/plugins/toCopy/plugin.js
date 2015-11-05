CKEDITOR.plugins.add("tocopy",
  {
    require: 'notification',
    icons: 'tocopy',
    init: function (editor) {
      editor.ui.addButton && editor.ui.addButton('tocopy', {
        label: "复制全部",
        command: 'copyall',
        toolbar: 'insert,50'
      });

      editor.execCommand('selectAll');
      setTimeout(function () {
        editor.execCommand('copy');
      }, 0);
    }
  });
