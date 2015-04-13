var t = $($0).wsControl();
//Быстрый переход - вызов функции reload 100 раз c целью отслеживания Deferred
function range(num) { var a = []; for (var i  = 0; i < num; i++) a.push(i); return a; }
range(100).reduce(function(d) { return d.addCallback(function() { t.reload(); return $ws.proto.Deferred.fromTimer(100); }); } , $ws.proto.Deferred.success(true));
//----------------------------------
$ws.core.attachInstance('SBIS3.CORE.Dialog', {
   template: 'js!SBIS3.CONTROLS.PrintMassSelectorDialog'});
$ws.core.attachInstance('Control/Area:Dialog',{
   template: 'js!SBIS3.CONTROLS.PrintMassSelectorDialog'});