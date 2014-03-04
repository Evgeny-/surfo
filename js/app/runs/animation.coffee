App.run ($rootScope, $window) ->
  $rootScope.direction = 'ltr';

  $rootScope.$on '$routeChangeStart', (event, next, current) ->
    $rootScope.direction = 'rtl';
    if (current && next && (current.depth > next.depth))
      $rootScope.direction = 'ltr';

  $rootScope.back = ->
    $window.history.back()