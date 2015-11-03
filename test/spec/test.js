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
      hrView = HRView.init(config);
      done();
    });
  });

  describe('Basic HR View Test', function () {
    it('should return correctly color', function () {
      var section = hrView.findComponent('Grid').get('styles.1');
      section.color.should.equal(config.defaultColor);
      section.p_style.should.equal('background-color: #fff;border-top: 3px double');
    });

    it('should return correctly color when change color', function () {
      hrView.fire('changeColor', {color: '#fff'});
      var section = hrView.findComponent('Grid').get('styles.2');
      section.color.should.equal('#fff');
    });
  });
});
