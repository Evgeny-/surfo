App.directive('checkTablet',
   ['$rootScope',  function ($rootScope) {

      return function (scope, els, attrs) {
         function checkTablet () {
            var changed = typeof $rootScope.isTablet !== 'undefined',
                dpi = els[0].clientWidth,
                winWidth = window.innerWidth,
                widthInch = winWidth / dpi;

            changed = changed && ($rootScope.isTablet !== (widthInch > 7));
            $rootScope.isTablet = widthInch > 7;
            return changed;
         }

         angular.element(window).bind('resize', function () {
            if(checkTablet()) $rootScope.$apply();
         });

         checkTablet();
      }

   }]
);