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

require([ "rv!views/hello", 'ractive', 'scripts/init'], function (helloTemplate, Ractive, init) {
  'use strict';
  init();

  var ractive = new Ractive({
    el: 'hello',
    template: helloTemplate,
    data: { color: "#000000", "fontSize": "20px" }
  });

});
