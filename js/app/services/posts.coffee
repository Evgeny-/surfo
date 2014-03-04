App.service 'Posts', ['Api', 'Like', class Posts
  LIMIT_LOAD: 30
  LIMIT_SHOW: 8
  MIN_CACHE: 20

  constructor: (@Api, @Like) ->

  getIterator: (category) ->
    data =
      iter: 0
      cache: []
      loading: false

    params =
      category: category
      limit: @LIMIT_LOAD
      offset_id: 0

    return (callback) =>
      loadFromCache = =>
        posts = data.cache.slice(0, @LIMIT_SHOW)
        data.cache = data.cache.slice(@LIMIT_SHOW)
        callback posts

      loadMoreCache = (callback=(->))=>
        data.loading = true
        @Api.get 'posts', params, (posts) ->
          posts = posts.result
          data.iter = data.iter + 1
          data.loading = false
          params.offset_id = posts[posts.length-1].id
          data.cache = data.cache.concat(posts)
          callback()

      if data.cache.length
        if data.cache.length < @MIN_CACHE
          setTimeout loadMoreCache, 20
        loadFromCache()
      else
        loadMoreCache(loadFromCache)

  getFavoriteIterator: ->
    data =
      cache: @Like.get().reverse()

    return (callback) =>
      posts = data.cache.slice(0, @LIMIT_SHOW)
      data.cache = data.cache.slice(@LIMIT_SHOW)
      callback posts
]