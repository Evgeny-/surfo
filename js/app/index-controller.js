App.controller('IndexController',
   ['$scope', '$location', 'Header', 'Menu', '$rootScope',
      function ($scope, $location, Header, Menu, $rootScope) {

         if($rootScope.isTablet && $location.path() === '/') {
            $location.path('/posts/favorites');
         }

         $scope.showedMenu = -1;
         $scope.menus = Menu.menu();

         $scope.openMenu = function (index) {
            $scope.showedMenu = $scope.showedMenu === index ? -1 : index;
         };

         $scope.openFavorite = function () {
            $location.path('/posts/favorites');
         };

         $scope.openCategory = function (id) {
            $location.path('/posts/' + id);
         };

         Header.set('back', false);
         Header.set('title', null);

         Menu.ready(function () {
            $scope.menus = Menu.menu();
         });
      }]
);
