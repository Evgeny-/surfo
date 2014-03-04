App.directive 'emuleFixed', ->
  ($scope, el, attrs) ->
    header = el[0].getElementsByClassName('header')[0]
    content = el[0].getElementsByClassName('content')[0]

    setHeight = ->
      bodyH = window.innerHeight
      headerH = header.clientHeight
      content.style.height = (bodyH - headerH) + 'px'

    setHeight()
    window.addEventListener 'resize', setHeight
    setInterval setHeight, 500