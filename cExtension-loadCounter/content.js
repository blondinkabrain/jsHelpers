(function () {
    let now = new Date(),
        //Можно toLocaleDateString() но там еще точки вырезать
        dateCounter = ['dc', now.getDate(), now.getMonth(), now.getFullYear()].join('-');

    /* + всегда приводит к числу, если в LS ничего нет, то +null будет 0*/
    localStorage.setItem(dateCounter, +localStorage.getItem(dateCounter) + 1);

   /* we can also do like this ->
    https://stackoverflow.com/questions/3937000/chrome-extension-accessing-localstorage-in-content-script
    and https://developer.chrome.com/apps/storage*/
    // chrome.storage.local.get([dateCounter], function (result) {
    //     let obj = {};
    //     result[dateCounter] = +result[dateCounter]++;
    //     chrome.storage.local.set(obj);
    // });
})();
