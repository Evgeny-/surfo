App.filter 'dateago', ->
  (time) ->
    date = new Date(time * 1000)
    now = new Date()
    diff = (now - date) / 1000 # sec

    if diff < 60 then diff + ' сек назад'
    else if diff < 3600 then ~~(diff/60) + ' мин назад'
    else if diff < 24*3600 then ~~(diff/3600) + ' ч назад'
    else if diff < 30*24*3600 then ~~(diff/3600/24) + ' д назад'
    else ~~(diff/30/24/3600) + ' мес назад'