App.service 'Menu', ['Api', 'Store', class Menu
  localStore: null
  serverStore: null
  callbacks: []
  loading: false

  favorite:
    colors: '#8E3D8D'
    name: 'Избранное'

  constructor: (@Api, @Store) ->
    @localStore = @Store.get('menu2') or null

  get: (callback) ->
    return callback(@serverStore) if @serverStore
    callback(@localStore) if @localStore
    @callbacks.push callback

    unless @loading
      @loading = true
      @Api.get 'menu', {}, (menu) =>
        @set(menu.result)
        for cb in @callbacks then cb menu.result

  getHeaderMenu: (cat, callback) ->
    return callback(@favorite) if cat is 'favorite'
    @get (menu) ->
      for el in menu
        for sel in el.submenu
          if sel.id is cat
            callback
              colors: el.colors
              name: sel.name

  set: (menu) ->
    @serverStore = menu
    @Store.set('menu2', menu)
]