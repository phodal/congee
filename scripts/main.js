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
    'amplify.request': 'scripts/libs/amplify.request.min',
    'spectrum': 'scripts/spectrum/spectrum'
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
    'spectrum': {
      deps: ['jquery']
    },
    'jquery.mixitup': {
      deps: ['jquery']
    },
    'jquery.pwstabs': {
      deps: ['jquery']
    }
  }
});

require([ 'ractive', 'scripts/init', 'scripts/config', 'amplify', 'amplify.request', 'spectrum'], function (Ractive, init, config, amplify) {
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
    template: '<input placeholder="Type your name" id="colorpicker" value="{{globalColor}}">',
    data: {globalColor: globalColor}
  });

  colors.observe( '.sp-preview-inner', function ( newValue ) {
    console.log(newValue);
    appConfig.defaultColor = newValue;
    this.fire('changeGlobalColor');
  });

  $("#colorpicker").spectrum({
    showPaletteOnly: true,
    togglePaletteOnly: true,
    togglePaletteMoreText: 'more',
    togglePaletteLessText: 'less',
    color: 'blanchedalmond',
    palette: [
      ["#000","#444","#666","#999","#ccc","#eee","#f3f3f3","#fff"],
      ["#f00","#f90","#ff0","#0f0","#0ff","#00f","#90f","#f0f"],
      ["#f4cccc","#fce5cd","#fff2cc","#d9ead3","#d0e0e3","#cfe2f3","#d9d2e9","#ead1dc"],
      ["#ea9999","#f9cb9c","#ffe599","#b6d7a8","#a2c4c9","#9fc5e8","#b4a7d6","#d5a6bd"],
      ["#e06666","#f6b26b","#ffd966","#93c47d","#76a5af","#6fa8dc","#8e7cc3","#c27ba0"],
      ["#c00","#e69138","#f1c232","#6aa84f","#45818e","#3d85c6","#674ea7","#a64d79"],
      ["#900","#b45f06","#bf9000","#38761d","#134f5c","#0b5394","#351c75","#741b47"],
      ["#600","#783f04","#7f6000","#274e13","#0c343d","#073763","#20124d","#4c1130"]
    ]
  });
});
