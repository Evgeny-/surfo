App.service 'Store', class Store
  get: (key, json=true) ->
    try
      if json then JSON.parse(localStorage.getItem(key)) else localStorage.getItem(key)
    catch e
      null

  set: (key, value) ->
    localStorage.setItem(key, JSON.stringify(value))