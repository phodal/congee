define(['ractive', 'text!templates/titles/list.html'], function (Ractive, titleTemplate) {
  'use strict';
  var titleView = null;

  var app = {
    init: function (config) {
      var Grid = Ractive.extend({
        isolated: false,
        template: titleTemplate,
        data: {

        }
      });
      //Styles Come from http://codepen.io/ibrahimjabbari/pen/ozinB
      var dataValue = 5;
      var category = 'category-1';

      var color = config.defaultColor;

      titleView = new Ractive({
        el: 'sandboxTitle',
        template: '<Grid Style="{{styles}}" />',
        components: {Grid: Grid},
        data: {
          styles: [
            {section_style: 'margin:1em auto;white-space: normal;border-style: none;text-align: center;', color: color,  data_value: dataValue, category: category}
          ]
        }
      });

      titleView.on('changeColor', function(args) {
        titleView.findComponent('Grid').set('Style.*.color', args.color);
      });

      return titleView;
    },

    toStyle: function(data){

    }
  };

  return app;
});
