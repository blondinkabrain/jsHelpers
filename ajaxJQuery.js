
$.ajax({
   url: '/price/oldiprx.zip',
   dataType: 'binary',
   type: 'GET',
   success:  function(result) {
      var url = URL.createObjectURL(result);
      var $a = $('<a />', {
         'href': url,
         'download': 'document.pdf',
         'text': "click"
      }).hide().appendTo("body")[0].click();

      // URL.revokeObjectURL(url);
   }
});

// Вот это точно работает--------------
//https://forum.jquery.com/topic/download-a-file-via-ajax
var $a = $('<a />', {
   'href': 'http://www.oldi.ru/price/oldiprx.zip',
   'target' : '_blank',
   'text': "click"
});
$a.hide().appendTo("body")[0].click();
$a.remove();
//http://stackoverflow.com/questions/4545311/download-a-file-by-jquery-ajax