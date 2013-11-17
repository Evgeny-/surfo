App.directive('ngToggle', function () {
   return function (scope, els, attrs) {
      var menu = els;

      scope.$watch(attrs.ngToggle, function (isOpen) {
         if(isOpen) menu.addClass('opened');
         else menu.removeClass('opened');
      });
   }
});