App.filter('readMore', function () {
   var LEN = 300;

   return function (t) {
      if (t.length < LEN + 100) return [t, null];

      var words = t.split('. '),
         res = "",
         word = 0,
         other;

      while(res.length < LEN) {
         res += words[word++] + ". ";
      }

      other = t.slice(res.length);

      if(other.length < 50) {
         return [res + other, null];
      }

      return [res, other];
   }
});