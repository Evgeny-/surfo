App.run ['Zoom', 'Share', (Zoom, Share) ->
  document.addEventListener("backbutton", ((e) ->
    if Zoom.opened() or Share.opened()
      Zoom.close()
      Share.close()
      e.preventDefault?()
      return false
    return true
  ), false)
]