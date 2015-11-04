define(['ractive', 'text!views/follow/list.html'], function (Ractive, followTemplate) {
  'use strict';
  var followView = null;

  var app = {
    init: function (config) {
      var Grid = Ractive.extend({
        isolated: false,
        template: followTemplate,
        data: {

        }
      });
      //Styles Come from http://codepen.io/ibrahimjabbari/pen/ozinB
      var dataValue = 5;
      var category = 'category-5';

      var color = config.defaultColor;

      followView = new Ractive({
        el: 'sandboxFollow',
        template: '<Grid Style="{{styles}}" />',
        components: {Grid: Grid},
        data: {
          styles: [
            {section_style: 'margin-top: 12px;min-height: 35px; height: 35px;line-height: 35px; border-radius: 3px; text-align: center;box-shadow: 0px 3px 0 #b2a98f,0px 11px 9px rgba(0,0,0,0.15),0 12px 2px rgba(0,0,0,0.1),0 12px 11px rgba(0,0,0,0.1);', span_out: 'font-size:14px;color: #fff;', span_in: 'color: #fff;', color: color,  data_value: dataValue, category: category, mpName: config.defaultMPName}
          ]
        }
      });

      followView.on('changeColor', function(args) {
        followView.findComponent('Grid').set('Style.*.color', args.color);
      });

      followView.on('changeName', function(args) {
        followView.findComponent('Grid').set('Style.*.mpName', args.mpName);
      });

      return followView;
    },

    toStyle: function(data){

    }
  };

  return app;
});
