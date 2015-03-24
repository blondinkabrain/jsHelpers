var
   fn = function(e) {
      var
         targetBranch = e.target.getAttribute('targetBranch'),
         url = document.URL.replace('rc-3.7.1', targetBranch);
      window.open(url, '_blank');
      window.blur();
   },
   title = $('.page-title');
if (title[0] && title[0].innerText == 'New merge request') {
   title
      .append($('<div class="branch master" targetBranch="master">master</div>'))
      .append($('<div class="branch" targetBranch="development">development</div>'))
      .append($('<div class="branch" targetBranch="rc-3.7.2">rc-3-7-2</div>'))
      .append($('<div class="branch" targetBranch="rc-3.7.1">rc-3-7-1</div>'))
      .bind('click', fn);
}
//Убираю инпут с lables, чтобы было видно кнопку submit merge-request
$('[for=s2id_autogen3]').parent().addClass('ws-hidden');