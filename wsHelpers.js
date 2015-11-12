var t = $($0).wsControl();
//Быстрый переход - вызов функции reload 100 раз c целью отслеживания Deferred
function range(num) { var a = []; for (var i  = 0; i < num; i++) a.push(i); return a; }
range(100).reduce(function(d) { return d.addCallback(function() { t.reload(); return $ws.proto.Deferred.fromTimer(100); }); } , $ws.proto.Deferred.success(true));
//----------------------------------
$ws.core.attachInstance('SBIS3.CORE.Dialog', {
   template: 'js!SBIS3.CONTROLS.PrintMassSelectorDialog'});
$ws.core.attachInstance('Control/Area:Dialog',{
   template: 'js!SBIS3.CONTROLS.PrintMassSelectorDialog'});
   
   //------------------------- Замыкание на setTimeout
   var testTimeOut = function(){ var attr= '123'; function fun() {func(attr);} setTimeout(fun, 5000)}
   
  //------------------------- Excel.Сохранить в сотрудниках
var bl = new $ws.proto.BLObject('Excel')
bl.call('Сохранить', {
   'ИмяМетода' : 'Персонал.СписокПерсонала', 
   'Фильтр':t.getQuery(),
   'Поля': ['@СвязиПользователя', 'Название'],
   'Заголовки' :['id', 'Название'],
   'Название' : 'Test.xml',
   'fileDownloadToken' : ('' + Math.random()).substr(2)* 1
   }, $ws.proto.BLObject.RETURN_TYPE_ASIS ).addCallback(function(){
      debugger;
   })
   //from formatMethod Персонал.СписокДляКарточкиСотрудника
   
   
   var bl = new $ws.proto.BLObject('Excel')
bl.call('Сохранить', {
   'ИмяМетода' : "Заметка.Список", 
   'Фильтр': { d: [], s: []},
   'Поля': ['@Заметка', 'Содержимое'],
   'Заголовки' :['@Заметка', 'Содержимое'],
   'Сортировка' : null,
   'Название' : 'Test',
   'fileDownloadToken' : ('' + Math.random()).substr(2)* 1
   }, $ws.proto.BLObject.RETURN_TYPE_ASIS ).addCallback(function(){
      debugger;
   })

$ws.helpers.saveToExcelFileWithGet({
   'ИмяМетода' : "Заметка.Список", 
   'Фильтр': { d: [], s: []},
   'Поля': ['@Заметка', 'Содержимое'],
   'Заголовки' :['id', 'Содержимое'],
   'Сортировка' : null,
   'Название' : 'Test',
   'fileDownloadToken' : ('' + Math.random()).substr(2)* 1
   })




$ws.helpers.prepareGetRPCInvocationURL('Excel', 'Сохранить', {
   'ИмяМетода' : "Заметка.Список", 
   'Фильтр': { d: [], s: []},
   'Поля': ['@Заметка', 'Содержимое'],
   'Заголовки' :['id', 'Содержимое'],
   'Сортировка' : null,
   'Название' : 'Test',
   'fileDownloadToken' : ('' + Math.random()).substr(2)* 1
   })

https://learn.javascript.ru/iframes
src="about:blank"
//http://tsd-chistyakova:1002/service/sbis-rpc-service300.dll?id=0&method=Excel.%D0%A1%D0%BE%D1%85%D1%80%D0%B0%D0%BD%D0%B8%D1%82%D1%8C&protocol=4&params=eyLQmNC80Y%2FQnNC10YLQvtC00LAiOiLQl9Cw0LzQtdGC0LrQsC7QodC%2F0LjRgdC%2B0LoiLCLQpNC40LvRjNGC0YAiOnsiZCI6W10sInMiOltdfSwi0J%2FQvtC70Y8iOlsiQNCX0LDQvNC10YLQutCwIiwi0KHQvtC00LXRgNC20LjQvNC%2B0LUiXSwi0JfQsNCz0L7Qu9C%2B0LLQutC4IjpbImlkIiwi0KHQvtC00LXRgNC20LjQvNC%2B0LUiXSwi0KHQvtGA0YLQuNGA0L7QstC60LAiOm51bGwsItCd0LDQt9Cy0LDQvdC40LUiOiJUZXN0IiwiZmlsZURvd25sb2FkVG9rZW4iOjQxMDYwNDU5MzExMTIwMjF9