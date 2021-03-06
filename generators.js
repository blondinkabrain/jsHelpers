//Быстрая запись в базу 100 записей через новый dataSource
function doRequest(i) {
   // simulate xhr
   console.log('Starting request to ' + i);
   var view = $ws.single.ControlStorage.get('DataGridBL');
   view._dataSource.create().addCallback(function (rec) {
      rec.set('Содержимое', 'Title ' + i);
	
      rec.set('Завершена', !!(Math.round(Math.random())));
      view._dataSource.update(rec).addBoth(function(){
	it.next();
	});
      
   });
}

function *sequentLoad(){
   var i =0;
   var view = $ws.single.ControlStorage.get('DataGridBL');
   for (i = 0; i < 100; i++) {
      yield doRequest(i);
   }
   return;
}


var it = sequentLoad();
it.next();


////////////////////////////// Иерархия

//Быстрая запись в базу 100 иерархических записей через новый dataSource
function doRequest(i) {
   // simulate xhr
   console.log('Starting request to ' + i);
   var view = $('#DataGridBL').wsControl();
   view._dataSource.create().addCallback(function (rec) {
      rec.set('Название', 'Title ' + i);
      rec.set('Раздел@', !!(Math.round(Math.random())));
      rec.set('Раздел$', null);
      view._dataSet._addRecords(rec);
      it.next();
   });
}

function *sequentLoad(){
   var i =0;
   var view = $('#DataGridBL').wsControl();
   for (i = 0; i < 100; i++) {
      yield doRequest(i);
   }
   view._dataSource.sync(view._dataSet);
   return;
}


var it = sequentLoad();
it.next();


/////////////////Запись отметки цветом
var bl = new $ws.proto.BLObject('ОтметкаЦветом')
bl.call('ЗаписатьОтметкаЦветомСвязь', {ColorMark : '1', IdObj : '71433', 'ИмяМетода': "Персонал.СписокПерсонала"}, $ws.proto.BLObject.RETURN_TYPE_ASIS);

var tb = $($0);

var trs = tb.find('tr');
$.each(tb.find('tr').not('.ws-browser-folder'), function(tr){
   var rowkey = $(tr).attr('rowkey');
   bl.call('ЗаписатьОтметкаЦветомСвязь', {ColorMark : '1', IdObj : rowkey, 'ИмяМетода': "Персонал.СписокПерсонала"}, $ws.proto.BLObject.RETURN_TYPE_ASIS);
});

function doRequest(key){
   var bl = new $ws.proto.BLObject('ОтметкаЦветом')
      bl.call('ЗаписатьОтметкаЦветомСвязь', {ColorMark : '1', IdObj : '71433', 'ИмяМетода': "Персонал.СписокПерсонала"}, 
      $ws.proto.BLObject.RETURN_TYPE_ASIS).addCallback(function(){
         it.next();
      });   
}

function *sequentLoad(){
   var tb = $('[name=listEmployeesWrap]');

   var trs = tb.find('tr');
   $.each(tb.find('tr').not('.ws-browser-folder'), function(e, tr){
   debugger;
      var rowkey = $(tr).attr('rowkey');
      yield doRequest(rowkey);
   });
}


var it = sequentLoad();
it.next();

////////////////////////////////Перебрасывание query
//Быстрая запись в базу 100 записей через новый dataSource
function doRequest(i, q) {
   // simulate xhr
   console.log('Starting request to ' + i);
   var view = $ws.single.ControlStorage.getByName("listSPPBrw");
   view.setQuery(q).addBoth(function(){
      it.next()
   });
}

function *sequentLoad(){
   var i =0;
   var t = $ws.single.ControlStorage.getByName("listSPPBrw");
   var q = t.getQuery();
   for (i = 0; i < 100; i++) {
      yield doRequest(i, i%2 ? q : $ws.core.merge(q, {Реквизиты: "втб"}));
   }
   return;
}


var it = sequentLoad();
it.next();