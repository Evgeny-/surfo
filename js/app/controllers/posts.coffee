App.controller 'PostsController',
  ['$scope', 'Posts', '$routeParams', 'ReadMore', 'Zoom', 'Share',
    ($scope, Posts, $routeParams, ReadMore, Zoom, Share) ->
      category = $routeParams.cat
      isFav = category is 'favorite'

      getPosts = Posts.getIterator(category) unless isFav
      getPosts = Posts.getFavoriteIterator() if isFav

      $scope.posts = []
      $scope.loading = false
      $scope.finished = false
      $scope.isFav = isFav

      $scope.openImage = (image) -> Zoom.open(image)
      $scope.readMore = (text) -> ReadMore.parse(text)
      $scope.share = (id) -> Share.open(id)

      $scope.loadMore = ->
        return if $scope.loading or $scope.finished
        $scope.loading = true
        getPosts (posts) ->
          $scope.finished = posts.length is 0
          $scope.posts = $scope.posts.concat(posts)
          $scope.loading = false

      $scope.loadMore()

      angular.element(window).bind "scroll", ->
        return if $scope.loading or $scope.finished
        scrollTop = pageYOffset || document.documentElement.scrollTop
        delta = window.innerHeight * 2.5
        if scrollTop + delta >= document.body.scrollHeight
          $scope.loadMore()
          $scope.$digest() unless $scope.$$phase
  ]