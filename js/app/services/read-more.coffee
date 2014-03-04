App.service 'ReadMore', [class ReadMore
  LENGTH: 200
  SECOND_MIN: 100
  DELIM: '\n'
  DELIM2: '.'

  parse: (text) ->
    return { first: text, all:text } if text.length < @LENGTH

    result = ''
    delim = @DELIM
    arr = text.split delim

    if arr.length is 1
      delim = @DELIM2
      arr = arr[0].split delim

    for el in arr
      result += el + delim
      break if result.length > @LENGTH

    if text.length - result.length < @SECOND_MIN
      return { first: text, all: text }
    else
      return { first: result, all: text }
]