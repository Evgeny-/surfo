App.controller 'HeaderController',
  ['$scope', '$rootScope', 'Menu', '$routeParams', '$location',
    ($scope, $rootScope, Menu, $routeParams, $location) ->
      blockedTop = false

      $scope.menu = {}

      $scope.top = ->
        top.window.scroll(0, 0) unless blockedTop

      $scope.back = -> $location.path '/'

      Menu.getHeaderMenu $routeParams.cat, (menu) ->
        $scope.menu = menu

      $rootScope.$on 'zoom:close', ->
        blockedTop = true
        setTimeout (-> blockedTop = false), 2000
  ]