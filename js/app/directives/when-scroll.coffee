App.directive "whenScrolled", ->
  (scope, elm, attr) ->
    raw = elm[0]
    elm.bind "scroll", ->
      delta = document.body.clientHeight * 2.8
      if raw.scrollTop + raw.offsetHeight >= raw.scrollHeight - delta
        scope.$apply attr.whenScrolled