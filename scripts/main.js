require.config({
  baseUrl: '',
  paths: {
    jquery: 'scripts/libs/jquery.min',
    text: 'scripts/libs/text',
    json: 'scripts/libs/json',
    dust: 'scripts/libs/dust-full.min',
    'dust-helper': 'scripts/libs/dust-helper.min',
    'jquery.pwstabs': 'scripts/libs/jquery.pwstabs.min',
    'jquery.mixitup': 'scripts/libs/jquery.mixitup.min',
    ckeditor: 'ckeditor/ckeditor',
    lodash: 'scripts/libs/loadsh.min',
    ko: 'scripts/libs/knockout'
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

define.amd.dust = true;

require(["dust", "text!views/hello.tpl", 'ko', 'ckeditor', 'jquery.mixitup', 'jquery.pwstabs'], function (dust, helloTemplate, ko, ckeditor) {
  'use strict';
  var src = document.getElementById('hello').textContent;
  var compiled = dust.compile(src, 'hello');
  dust.loadSource(compiled);
  dust.render('hello', { color: "#000000", "font-size": "20px" }, function(err, out) {
    console.log(out);
    document.getElementById('output').innerHTML = out;
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
