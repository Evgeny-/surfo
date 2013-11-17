App.directive('bindLinks', function () {
   return function (scope, els, attrs) {
      setTimeout(function () {
         var links = els[0].getElementsByClassName('link');

         for(var i=0; i<links.length; i++) {
            var link = angular.element(links[i]);

            link.bind('click', function (e) {
               e.preventDefault();
               e.stopPropagation();
               window.open(link.attr('href'), '_system');
               return false;
            });
         }
      }, 400);

   }
});