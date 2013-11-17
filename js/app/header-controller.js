App.controller('HeaderController',
   ['$scope', '$rootScope', 'Header', 'Menu', 'zoom', '$location',
      function ($scope, $rootScope, Header, Menu, zoom, $location) {

         $scope.isBack = Header.back;
         $scope.title = Header.title;

         $rootScope.zoomOpened = null;

         $rootScope.$on('Header:title', function (e, title) {
            $scope.title = title;
         });

         $rootScope.$on('Header:back', function (e, back) {
            $scope.isBack = back;
         });

         $rootScope.$on('Header:color', function (e, color) {
            $scope.colorHeader = color;
         });

         $scope.back = function () {
            zoom.close();
            $location.path('/');
         };

         $scope.scrollTop = function () {
            scrollTo(0, 0);
         };
      }]
);