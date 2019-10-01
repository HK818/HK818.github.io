/*
* @Author: sprat
* @Date:   2019-10-01 16:05:06
* @Last Modified by:   sprat
* @Last Modified time: 2019-10-01 16:41:22
*/
;;(function() {
  var _mermaid_init = function() {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'forest',
      // themeCSS: '.node rect { fill: red; }',
      logLevel: 3,
      flowchart: { curve: 'linear' },
      gantt: { axisFormat: '%m/%d/%Y' },
      sequence: { actorMargin: 50 },
      // sequenceDiagram: { actorMargin: 300 } // deprecated
    });
  };

  var hm = document.createElement("script");
  hm.src = "https://cdn.bootcss.com/mermaid/8.0.0-rc.8/mermaid.min.js";
  hm.onload = _mermaid_init;
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);

  (function() {
    var codelist = document.querySelectorAll('code.language-mermaid');
    if (codelist && 'length' in codelist && codelist.length > 0) {
      for (var i = 0; i < codelist.length; i++) {
        var div = document.createElement('div');
        div.className = 'mermaid';
        div.setAttribute('align', 'center');
        div.innerHTML = codelist[i].innerHTML.replace(/&amp;/g, '&');
        codelist[i].replaceWith(div);
      }
    }
  })();
})();
