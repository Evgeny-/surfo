App.service 'Like', ['Store', class Like
  store: []

  save: -> @Store.set 'liked2', @store.filter((p) -> p?.id?)

  constructor: (@Store) ->
    @store = @Store.get('liked2') or []
    @store = [] unless angular.isArray @store

  is: (id) ->
    for post in @store
      return true if +post.id is +id
    false

  add: (post) ->
    @store.push post
    @save()

  get: -> @store

  remove: (id) ->
    @store = @store.filter (post) -> +post.id isnt +id
    @save()
]