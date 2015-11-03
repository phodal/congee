function loadValue(musicNode) {
  if (musicNode.hasAttribute(this.id)) {
    var value = musicNode.getAttribute(this.id);
    this.setValue(value);
  }
}

function getJsonFromUrl(query) {
  var result = {};
  console.log(query);
  if (query.toString().indexOf('&') === -1 || query.toString().indexOf('=') === -1) {
    return {}
  }
  query.split("&").forEach(function (part) {
    var item = part.split("=");
    result[item[0]] = decodeURIComponent(item[1]);
  });
  return result;
}

function appendData(musicNode) {
  var value = this.getValue();
  var jsonData = getJsonFromUrl(value);
  musicNode.setAttribute("mid", jsonData.mid);
  musicNode.setAttribute("albumurl", "/N/Y/002Qp0Jv1PFKNY.jpg");
  musicNode.setAttribute("audiourl", "http://ws.stream.qqmusic.qq.com/657177.m4a?fromtag=46");
  musicNode.setAttribute("commentid", "1873023090");
  musicNode.setAttribute("musicid", "657177");
  musicNode.setAttribute("class", "res_iframe qqmusic_iframe js_editor_qqmusic");
  musicNode.setAttribute("play_length", "236000");
  musicNode.setAttribute("src", "https://mp.weixin.qq.com/cgi-bin/readtemplate?t=tmpl/qqmusic_tmpl&amp;singer=%E8%94%A1%E6%B7%B3%E4%BD%B3%20-%20%E5%9B%9E%E5%88%B0%E6%9C%80%E5%88%9D%EF%BC%88%E6%96%B0%E5%8A%A0%E5%9D%A1%E5%BA%86%E5%8A%9F%E7%89%88%EF%BC%89&amp;music_name=%E5%9B%9E%E5%88%B0%E6%9C%80%E5%88%9D");
}

function commitValue(musicNode) {
  var value = this.getValue();
  musicNode.setAttribute(this.att || this.id, value);
}

CKEDITOR.dialog.add('music', function (editor) {
  return {
    title: "QQ音乐",
    minWidth: 480,
    minHeight: 240,
    onShow: function () {

    },
    onOk: function () {
      var musicNode;
      musicNode = new CKEDITOR.dom.element('iframe');

      this.commitContent(musicNode, {}, {});
      editor.insertElement(musicNode);
    },
    contents: [{
      id: 'music',
      label: "QQ音乐",
      elements: [{
        type: 'html',
        html: '<a href="http://y.qq.com/" target="_blank">打开QQ音乐</a>'
      }, {
        type: 'vbox',
        padding: 0,
        children: [{
          id: 'music_url',
          type: 'text',
          label: "QQ音乐地址",
          required: true,
          validate: CKEDITOR.dialog.validate.notEmpty("QQ音乐地址: 不能为空"),
          setup: loadValue,
          commit: appendData
        }]
      },
        {
          type: 'hbox',
          children: [{
            id: 'singer',
            type: 'text',
            style: 'width:100%',
            labelLayout: 'vertical',
            label: "歌手",
            validate: CKEDITOR.dialog.validate.notEmpty("歌手: 不能为空"),
            setup: loadValue,
            commit: commitValue
          },
            {
              id: 'music_name',
              type: 'text',
              style: 'width:100%',
              labelLayout: 'vertical',
              label: "歌曲",
              validate: CKEDITOR.dialog.validate.notEmpty("歌曲: 不能为空"),
              setup: loadValue,
              commit: commitValue
            }]
        }]
    }]
  };
});
