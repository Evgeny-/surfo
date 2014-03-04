App.config ['$routeProvider', ($routeProvider) ->
  $routeProvider
    .when('/',
      templateUrl: 'views/menu.html'
      depth: 1
    )
    .when('/category/:cat',
      templateUrl: 'views/category.html'
      depth: 2
    )
    .otherwise({redirectTo: '/'})
]