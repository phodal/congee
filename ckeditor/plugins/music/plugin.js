CKEDITOR.plugins.add('music',
  {
    requires: 'dialog',
    icons: 'music',
    //hidpi: true,
    init: function (editor) {
      editor.addCommand('music', new CKEDITOR.dialogCommand('music', {
        allowedContent: 'iframe[align,longdesc,frameborder,height,name,scrolling,src,title,width]',
        requiredContent: 'iframe'
      }));
      editor.ui.addButton && editor.ui.addButton('Music', {
        label: editor.lang.smiley.toolbar,
        command: 'music',
        toolbar: 'insert,50'
      });

      CKEDITOR.dialog.add('music', this.path + 'dialogs/music.js');
    }
  });
