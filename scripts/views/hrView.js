define(['ractive', 'text!views/hr/list.html'], function (Ractive, hrTemplate) {
  'use strict';
  var parasView = null;

  var app = {
    init: function (config) {
      var Grid = Ractive.extend({
        isolated: false,
        template: hrTemplate,
        data: {

        }
      });
      //Styles Come from http://codepen.io/ibrahimjabbari/pen/ozinB
      var dataValue = 5;
      var category = 'category-4';

      var color = config.defaultColor;

      parasView = new Ractive({
        el: 'sandboxHr',
        template: '<Grid hrStyle="{{styles}}" />',
        components: {Grid: Grid},
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
            {section_style: '', p_style: 'height: 6px;background: url(\'styles/images/hr/hr-11.png\') repeat-x 0 0;border: 0;', data_value: dataValue, category: category},
            {section_style: '', p_style: 'height: 6px;background: url(\'styles/images/hr/hr-12.png\') repeat-x 0 0;border: 0;', data_value: dataValue, category: category},
            {section_style: '', p_style: 'height: 10px;border: 0;box-shadow: 0 10px 10px -10px #8c8b8b inset;', data_value: dataValue, category: category},
            {section_style: '', p_style: 'border: 0;height: 1px;background-image: -webkit-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);background-image: -moz-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);background-image: -ms-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);background-image: -o-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);', data_value: dataValue, category: category}
          ]
        }
      });

      parasView.on('changeColor', function(args) {
        parasView.findComponent('Grid').set('hrStyle.*.color', args.color);
      });

      return parasView;
    },

    toStyle: function(data){
      
    }
  };

  return app;
});
