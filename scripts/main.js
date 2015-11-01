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
  var parasView = null;

  amplify.request.define( "getTitle", "ajax", {
    url: "./views/titles/hello.html",
    dataType: "text",
    type: "GET"
  });

  amplify.request( "getTitle", function( data ) {
    ractive = new Ractive({
      el: 'sandboxTitle',
      template: data,
      data: { color: appConfig.defaultColor, "fontSize": appConfig.defaultFontSize }
    });

    ractive.on('changeColor', function(args) {
      ractive.set('color', args.color);
    });
  });

  amplify.request.define( "hrList", "ajax", {
    url: "./views/hr/list.html",
    dataType: "text",
    type: "GET"
  });

  amplify.request( "hrList", function( data ) {
    var Grid = Ractive.extend({
      isolated: true,
      template: data,
      data: {

      }
    });
    //Styles Come from http://codepen.io/ibrahimjabbari/pen/ozinB
    var dataValue = 5;
    var category = 'category-4';

    var color = appConfig.defaultColor;

    parasView = new Ractive({
      el: 'sandboxHr',
      template: '<Grid hrStyle="{{styles}}" />',
      data: {
        styles: [
          {section_style: '', p_style: 'background-color: #fff;border-top: 1px solid', color: color,  data_value: dataValue, category: category},
          {section_style: '', p_style: 'background-color: #fff;border-top: 3px double', color: color, data_value: dataValue, category: category},
          {section_style: '', p_style: 'background-color: #fff;border-top: 1px dashed', color: color, data_value: dataValue, category: category},
          {section_style: '', p_style: 'background-color: #fff;border-top: 1px dotted', color: color, data_value: dataValue, category: category},
          {section_style: '', p_style: 'background-color: #fff;border-top: 2px dashed', color: color, data_value: dataValue, category: category},
          {section_style: '', p_style: 'background-color: #fff;border-top: 2px dotted', color: color, data_value: dataValue, category: category},
          {section_style: '', p_style: 'background-color: #fff;border-bottom: 1px solid #fff;border-top: 1px solid', color: color,  data_value: dataValue, category: category},
          {section_style: 'border-top: 1px solid #8c8b8b; border-bottom: 1px solid #fff;', p_style: 'content: "";display: block;margin-top: 2px;border-top: 1px solid #8c8b8b;border-bottom: 1px solid #fff;', data_value: dataValue, category: category},
          {section_style: '', p_style: "height: 6px;background: url('styles/images/hr/hr-11.png') repeat-x 0 0;border: 0;", data_value: dataValue, category: category},
          {section_style: '', p_style: "height: 6px;background: url('styles/images/hr/hr-12.png') repeat-x 0 0;border: 0;", data_value: dataValue, category: category},
          {section_style: '', p_style: "height: 10px;border: 0;box-shadow: 0 10px 10px -10px #8c8b8b inset;", data_value: dataValue, category: category},
          {section_style: '', p_style: 'border: 0;height: 1px;background-image: -webkit-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);background-image: -moz-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);background-image: -ms-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);background-image: -o-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);', data_value: dataValue, category: category}
        ]
      },
      components: {Grid: Grid}
    });

    parasView.on('changeColor', function(args) {
      console.log(args );
      parasView.set('color', args.color);
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
      parasView.fire('changeColor', {color: color.toHexString()});
    }
  });
});
