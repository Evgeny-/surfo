App.directive('visibleImage', function () {
   return function (scope, el, attr) {
      var hidden = true;

      angular.element(window).bind('scroll', checkVisible);
      checkVisible();

      function checkVisible () {
         var offsetTop = el[0].getBoundingClientRect().top;

         if(offsetTop < 600 && offsetTop > -500) {
            hidden = false;
            el[0].style.visibility = 'visible';
         }
         else if(!hidden) {
            el[0].style.visibility = 'hidden';
         }
      }
   }
});