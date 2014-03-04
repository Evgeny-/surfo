App.directive 'like', ['$parse', 'Like', ($parse, Like) ->
  like = (post, element) ->
    Like.add post
    classes element, 'icon-heart', 'icon-heart-empty'

  dislike = (id, element) ->
    Like.remove id
    classes element, 'icon-heart-empty', 'icon-heart'

  classes = (el, add, del) ->
    el.addClass add
    el.removeClass del

  return {
    restrict: 'E'
    template: '<span></span>'
    replace: true
    link: (scope, element, attrs) ->
      post = $parse(attrs.post)(scope)

      if Like.is post.id
        classes element, 'icon-heart', 'icon-heart-empty'
      else
        classes element, 'icon-heart-empty', 'icon-heart'

      Hammer(element.parent()[0]).on 'tap', ->
        if Like.is(post.id)
        then dislike(post.id, element)
        else like(post, element)
  }

]