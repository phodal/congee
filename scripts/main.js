require.config({
  baseUrl: '',
  paths: {
    jquery: 'scripts/libs/jquery.min',
    text: 'scripts/libs/text',
    json: 'scripts/libs/json',
    'jquery.pwstabs': 'scripts/libs/jquery.pwstabs.min',
    'jquery.mixitup': 'scripts/libs/jquery.mixitup.min',
    ckeditor: 'ckeditor/ckeditor',
    lodash: 'scripts/libs/loadsh.min',
    ko: 'scripts/libs/knockout',
    ractive: 'scripts/libs/ractive.min',
    rv: 'scripts/libs/rv'
  },
  'shim': {
    ko: {
      exports: "ko"
    },
    lodash: {
      exports: "_"
    },
    'jquery.mixitup': {
      deps: ['jquery']
    },
    'jquery.pwstabs': {
      deps: ['jquery']
    }
  }
});

require([ "rv!views/hello", 'ractive', 'ckeditor', 'jquery.mixitup', 'jquery.pwstabs'], function (helloTemplate, Ractive) {
  'use strict';
  var ractive = new Ractive({
    el: 'hello',
    template: helloTemplate,
    data: { color: "#000000", "fontSize": "20px" }
  });
  var congee = CKEDITOR.replace('congee', {});

  congee.on('change', function (evt) {
    // getData() returns CKEditor's HTML content.
    console.log('Total bytes: ' + evt.editor.getData().length);
  });

  congee.on('instanceReady', function (ev) {
    $('.tabset8').pwstabs({
      effect: 'slideleft',
      defaultTab: 1,
      tabsPosition: 'vertical',
      verticalPosition: 'left'
    });
    $('#Container').mixItUp().on('click', '.mix', function(event){
      var template = $(event.currentTarget).html();
      congee.insertHtml(template);
    });
  });
});
