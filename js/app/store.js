window.myStore = {
   set : function (k, v) {
      localStorage.setItem(k, typeof v === "object" ? JSON.stringify(v) : v);
   },
   get : function (k, json) {
      k = localStorage.getItem(k);
      return k && json ? JSON.parse(k) : k;
   }
};

App.factory('store', function () {
   return myStore;
});