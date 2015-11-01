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
    'spectrum': 'scripts/spectrum/spectrum',
    'jquery.nicescroll': 'scripts/libs/jquery.nicescroll.min'
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
    'jquery.nicescroll': {
      deps: ['jquery']
    },
    'jquery.pwstabs': {
      deps: ['jquery']
    }
  }
});

require(['ko', 'ractive', 'scripts/init', 'scripts/config', 'amplify', 'amplify.request', 'spectrum'], function (ko, Ractive, init, config, amplify) {
  'use strict';
  init();
  var appConfig = config;
  var ractive = null;

  amplify.request.define( "getTitle", "ajax", {
    url: "./views/titles/hello.html",
    dataType: "text",
    type: "GET"
  });

  amplify.request( "getTitle", function( data ) {
    ractive = new Ractive({
      el: 'hello',
      template: data,
      data: { color: appConfig.defaultColor, "fontSize": appConfig.defaultFontSize }
    });

    ractive.on('changeColor', function(args) {
      ractive.set('color', args.color);
    });
  });

  $("#colorpicker").spectrum({
    showPaletteOnly: true,
    togglePaletteOnly: true,
    togglePaletteMoreText: 'more',
    togglePaletteLessText: 'less',
    color: '#4caf50',
    palette: [
      ["#1abc9c","#16a085","#2ecc71","#27ae60","#4caf50","#8bc34a","#cddc39"],
      ["#3498db","#2980b9","#34495e","#2c3e50","#2196f3","#03a9f4","#00bcd4","#009688"],
      ["#e74c3c","#c0392b","#f44336"],
      ["#e67e22","#d35400","#f39c12","#ff9800","#ff5722","#ffc107"],
      ["#f1c40f","#ffeb3b"],
      ["#9b59b6","#8e44ad","#9c27b0","#673ab7","#e91e63","#3f51b5"],
      ["#795548"],
      ["#9e9e9e","#607d8b","#7f8c8d","#95a5a6","#bdc3c7"],
      ["#ecf0f1","efefef"]
    ],
    change: function(color) {
      ractive.fire('changeColor', {color: color.toHexString()});
    }
  });
});
