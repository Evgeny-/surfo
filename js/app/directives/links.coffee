App.directive 'bindlinks', ->
  (scope, el, attrs) ->
    el = el[0]
    setTimeout (->
      for link in el.querySelectorAll('.link, .main-link')
        link.addEventListener 'click', (e) ->
          e.preventDefault()
          window.open(link.getAttribute('href'), '_system')
          false
    ), 300