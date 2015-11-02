/* global describe, it */

var requirejs = require("requirejs");
var assert = require("assert");
var should = require("should");

requirejs.config({
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
  },
  nodeRequire: require
});

describe('Basic Test', function () {
  var hrView, config = {
    'defaultColor': '#4caf50',
    'defaultFontSize': '20px'
  };

  before(function (done) {
    requirejs(['scripts/views/hrView'], function (HRView) {
      hrView = HRView;
      done();
    });
  });

  describe('Basic Test', function () {
    it('should have a test', function () {
      console.log(hrView.init(config));
    });
  });
});
