define(['ractive', 'text!views/titles/hello.html'], function (Ractive, listTemplate) {
  'use strict';
  var listView = null;

  var app = {
    init: function (config) {
      listView = new Ractive({
        el: 'sandboxTitle',
        template: listTemplate,
        data: {color: config.defaultColor, 'fontSize': config.defaultFontSize}
      });

      listView.on('changeColor', function (args) {
        listView.set('color', args.color);
      });

      return listView;
    }
  };

  return app;
});
