App.service 'Api', ['$http', 'Config', class Api
  constructor: (@$http, @Config) ->

  _serilize: (data, res = '?') ->
    for k, v of data then res += "#{encodeURIComponent(k)}=#{encodeURIComponent(v)}&"
    res.slice(0, res.length - 1)

  get: (method, data, callback) ->
    data.method = method
    data.callback = 'JSON_CALLBACK'
    @$http.jsonp(@Config.api_url + @_serilize(data))
      .success(callback)
      .error(-> callback({error: 'Ошибка при загрузке'}))
]