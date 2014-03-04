App.controller 'ZoomController',
  ['$scope', '$rootScope', 'Zoom', ($scope, $rootScope, Zoom) ->
    $scope.opened = false
    $scope.image = null

    $scope.close = ->
      $scope.opened = false
      Zoom.close()

    $scope.download = ->
      try
        fileTransfer = new FileTransfer()
        name = $scope.image.split("/")[$scope.image.split("/").length - 1]
        fileTransfer.download $scope.image, "file:///sdcard/surfo/" + name, ((entry) ->
          alert "Изображение сохранено в /surfo/" + name
        ), ->
          alert "Ошибка сохранения изображения :("
      catch e
        alert "Ошибка: " + e.toString()

    $rootScope.$on 'zoom:open', ($event, image) ->
      $scope.opened = true
      $scope.image = image
      setTimeout (->hammerZoom('image-wrap')), 100

    $rootScope.$on 'zoom:close', ->
      document.querySelector('#image-wrap img').setAttribute('style', '')
      $scope.opened = false
      $scope.image = null
  ]

hammerZoom = (wrapId) ->
  wrap = document.getElementById(wrapId)
  rect = wrap.querySelector("img")
  hammertime = Hammer(wrap,
    transform_always_block: true
    transform_min_scale: 1
    drag_block_horizontal: true
    drag_block_vertical: true
    drag_min_distance: 0
  )
  posX = 0
  posY = 0
  scale = 1
  last_scale = undefined
  last_posX = 0
  last_posY = 0
  max_pos_x = 0
  max_pos_y = 0
  lastScaleTime = +new Date
  delay = 400
  hammertime.on "touch drag transform dragend", (ev) ->
    switch ev.type
      when "touch"
        last_scale = scale

      when "drag"
        break  if +new Date - lastScaleTime < delay
        posX = last_posX + ev.gesture.deltaX
        posY = last_posY + ev.gesture.deltaY
        posX = max_pos_x  if posX > max_pos_x
        posX = -max_pos_x  if posX < -max_pos_x
        posY = max_pos_y  if posY > max_pos_y
        posY = -max_pos_y  if posY < -max_pos_y

      when "transform"
        lastScaleTime = +new Date
        scale = Math.max(1, Math.min(last_scale * ev.gesture.scale, 5))
        max_pos_y = Math.ceil((scale - 1) * rect.clientHeight / 2)
        max_pos_x = Math.ceil((scale - 1) * rect.clientWidth / 2)
        posX = max_pos_x  if posX > max_pos_x
        posX = -max_pos_x  if posX < -max_pos_x
        posY = max_pos_y  if posY > max_pos_y
        posY = -max_pos_y  if posY < -max_pos_y

      when "dragend"
        break if +new Date - lastScaleTime < delay
        last_posX = posX
        last_posY = posY

    transform = "translate3d(" + posX + "px," + posY + "px, 0) scale3d(1, 1, 1)"
    transform = "translate3d(" + posX + "px," + posY + "px, 0) scale3d(" + scale + "," + scale + ", 1)"  if scale isnt 1

    rect.style.transform = transform
    rect.style.mozTransform = transform
    rect.style.webkitTransform = transform
