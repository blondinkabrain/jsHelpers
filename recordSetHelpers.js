var t = $($0).wsControl();
var r = t.getRecordSet().getRecords();
var keys = {};
for (var i = 0, len = r.length; i < len; i++) {
   if (keys.hasOwnProperty(r[i].getKey())) {
      console.log(r[i].getKey(), i)
   }
   keys[r[i].getKey()] = true;
}