App.directive 'gif', ['$parse', ($parse) ->
  (scope, el, attr) ->
    gif = $parse(attr.gif)(scope)
    el = el[0]
    el.setAttribute('src', gif.preview)
    statePreview = true
    Hammer(el).on 'tap', ->
      el.setAttribute('src', if statePreview then gif.url else gif.preview)
      statePreview = !statePreview
]