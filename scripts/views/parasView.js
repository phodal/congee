define(['ractive', 'text!views/paras/list.html'], function (Ractive, parasTemplate) {
  'use strict';
  var parasView = null;

  var app = {
    init: function (config) {
      var Grid = Ractive.extend({
        isolated: false,
        template: parasTemplate,
        data: {

        }
      });

      var dataValue = 5;
      var category = 'category-3';

      var color = config.defaultColor;

      parasView = new Ractive({
        el: 'parasSanbox',
        template: '<Grid Style="{{styles}}" />',
        components: {Grid: Grid},
        data: {
          styles: [
            {section_style: 'border: 2px dotted #4caf50; margin: 8px 14px; padding: 10px; border-radius: 14px;', p_style: 'font-size: 14px;', color: color,  data_value: dataValue, category: category},
            {section_style: 'border: 1px solid #4caf50; margin: 8px 14px; padding: 10px;', p_style: 'font-size: 14px;color:#34495e;', color: color, data_value: dataValue, category: category}
            //{section_style: '', p_style: 'background-color: #fff;border-top: 1px dashed', color: color, data_value: dataValue, category: category}
          ]
        }
      });

      parasView.on('changeColor', function(args) {
        parasView.findComponent('Grid').set('Style.*.color', args.color);
      });

      return parasView;
    },

    toStyle: function(data){

    }
  };

  return app;
});
