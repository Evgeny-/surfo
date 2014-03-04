App.controller 'MenuController',
  ['$scope', 'Menu', '$location',
    ($scope, Menu, $location) ->
      if $location.path() is '/' and TABLET
        return $location.path '/category/favorite'

      $scope.menu = []
      $scope.showed = null

      $scope.show = (id) ->
        if $scope.showed is id then $scope.showed = null
        else $scope.showed = id

      $scope.openCategory = (id) ->
        $location.path '/category/'+id

      Menu.get (menu) ->
        $scope.menu = menu
  ]