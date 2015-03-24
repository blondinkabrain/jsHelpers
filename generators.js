//Быстрая запись в базу 1000 записей через новый dataSource
function doRequest(i) {
   // simulate xhr
   console.log('Starting request to ' + i);
   var view = $ws.single.ControlStorage.get('ListViewDS1');
   view._dataSource.create().addCallback(function (rec) {
      rec.set('Содержимое', 'Title ' + i);
      rec.set('Завершена', !!(Math.round(Math.random())));
      view._dataSet.addRecords(rec);
      it.next();
   });
}

function *sequentLoad(){
   var i =0;
   var view = $ws.single.ControlStorage.get('ListViewDS1');
   for (i = 0; i < 1000; i++) {
      yield doRequest(i);
   }
   view._dataSource.sync(view._dataSet);
   return;
}


var it = sequentLoad();
it.next();