define(['ckeditor', 'ckeditor', 'jquery.mixitup', 'jquery.pwstabs'], function() {
  'use strict';
  var init = function () {
    var congee = CKEDITOR.replace('congee', {});

    congee.on('change', function (evt) {

    });

    congee.on('instanceReady', function (ev) {
      $('.tabset8').pwstabs({
        effect: 'slideleft',
        defaultTab: 1,
        tabsPosition: 'vertical',
        verticalPosition: 'left'
      });
      $('#Container').mixItUp().on('click', '.mix', function(event){
        var template = $(event.currentTarget).html();
        congee.insertHtml(template);
      });
    });
  };

  return init;
});
