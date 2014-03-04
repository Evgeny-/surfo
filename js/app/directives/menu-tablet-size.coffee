App.directive 'menuTabletSize', ['$rootScope', ($rootScope) ->
  (scope, el, attr) ->
    interval = null
    $rootScope.$watch('TABLET', (res) ->
      return unless res
      clearInterval interval

      setTimeout (->
        header = el[0].getElementsByClassName('header')[0]
        menu = el[0].getElementsByClassName('tablet-menu')[0]

        setHeight = ->
          return if not header or not menu
          menu.style.height = (window.innerHeight - header.clientHeight) + 'px'

        window.addEventListener 'resize', setHeight
        interval = setInterval setHeight, 400
        setHeight()
      ), 200
    )
]