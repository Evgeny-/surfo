App.directive 'setBackground',
  ['$rootScope', 'Menu', '$routeParams', 'Color',
    ($rootScope, Menu, $routeParams, Color) ->
      (scope, el, attr) ->
        $rootScope.$on '$routeChangeSuccess', (event, next, current) ->
          el[0].style.backgroundColor = null
          Menu.getHeaderMenu $routeParams.cat, (menu) ->
            color = Color.lighten(menu.colors, 0.9)
            el[0].style.backgroundColor = color
  ]