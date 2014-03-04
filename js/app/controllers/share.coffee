App.controller 'ShareController',
  ['$scope', '$rootScope', 'Zoom', ($scope, $rootScope, Share) ->
    $scope.opened = false
    $scope.post = null

    $scope.close = ->
      $scope.opened = false
      Share.close()

    $scope.share = (soc) ->
      window.open('http://surfo.ru/share/'+$scope.post+'?site='+soc, '_system')
      $scope.close()

    $rootScope.$on 'share:open', ($event, post) ->
      $scope.opened = true
      $scope.post = post

    $rootScope.$on 'share:close', ->
      $scope.opened = false
      $scope.post = null
  ]