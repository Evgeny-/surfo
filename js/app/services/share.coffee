App.service 'Share', ['$rootScope', class Share
  constructor: (@$rootScope) ->

  opened: -> @$rootScope.shareOpened

  open: (id) ->
    @$rootScope.$emit('share:open', id)
    @$rootScope.shareOpened = true

  close: ->
    @$rootScope.$emit 'share:close'
    @$rootScope.shareOpened = false

]