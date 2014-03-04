App.service 'Zoom', ['$rootScope', class Zoom
  constructor: (@$rootScope) ->

  opened: -> @$rootScope.zoomOpened

  open: (image) ->
    @$rootScope.$emit('zoom:open', image)
    @$rootScope.zoomOpened = true

  close: ->
    @$rootScope.$emit('zoom:close')
    @$rootScope.zoomOpened = false
]