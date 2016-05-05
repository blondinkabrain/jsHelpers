/**
 * Класс вспомогательных функций
 * @class $ws.helpers
 * @public
 */
$sc = (function(){
   return {};
})();
$sc.helpers={
   parseUrl : function(){
      var search = window.location.search.substr(1),
            keys = {};

      search.split('&').forEach(function(item) {
         item = item.split('=');
         keys[item[0]] = item[1];
      });

      return keys;
   }
};