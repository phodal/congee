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
    rv: 'scripts/libs/rv',
    amplify: 'scripts/libs/amplify.min',
    'amplify.request': 'scripts/libs/amplify.request.min'
  },
  'shim': {
    ko: {
      exports: "ko"
    },
    lodash: {
      exports: "_"
    },
    'amplify.request': {
      deps: ['amplify']
    },
    'amplify': {
      deps: ['jquery'],
      exports: 'amplify'
    },
    'jquery.mixitup': {
      deps: ['jquery']
    },
    'jquery.pwstabs': {
      deps: ['jquery']
    }
  }
});

require([ 'ractive', 'scripts/init', 'scripts/config', 'amplify', 'amplify.request'], function (Ractive, init, config, amplify) {
  'use strict';
  init();
  var appConfig = config;
  var globalColor = "#000";

  amplify.request.define( "getTitle", "ajax", {
    url: "./views/titles/hello.html",
    dataType: "text",
    type: "GET"
  });

  amplify.request( "getTitle", function( data ) {
    var ractive = new Ractive({
      el: 'hello',
      template: data,
      data: { color: appConfig.defaultColor, "fontSize": appConfig.defaultFontSize }
    });

    ractive.on('changeGlobalColor', function() {
      console.log("=============")
    });
  });

  var colors = new Ractive({
    el: 'colors',
    template: '<input placeholder="Type your name" value="{{globalColor}}">',
    data: {globalColor: globalColor}
  });

  colors.observe( 'globalColor', function ( newValue ) {
    console.log(newValue);
    appConfig.defaultColor = newValue;
    this.fire('changeGlobalColor');
  });

});
