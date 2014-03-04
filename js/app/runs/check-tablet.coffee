TABLET = false

do ->
  el = document.querySelector('.check-tablet')
  TABLET = el.clientWidth isnt 0
  window.addEventListener 'resize', ->
    TABLET = el.clientWidth isnt 0

App.run ['$rootScope', ($rootScope) ->
  el = document.querySelector('.check-tablet')
  $rootScope.TABLET = el.clientWidth isnt 0

  window.addEventListener 'resize', ->
    newValue = el.clientWidth isnt 0
    if newValue isnt $rootScope.TABLET
      $rootScope.TABLET = newValue
      $rootScope.$digest()
]