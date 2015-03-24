var fn = function(e) {
   var targetBranch = e.target.getAttribute('targetBranch');
   chrome.tabs.getSelected(null, function(tab) {
      var url = tab.url;
      url = url.replace('development', targetBranch);
      chrome.tabs.create({
         url: url,
         active: false
      });
   });
};
$('div').bind('click', fn);