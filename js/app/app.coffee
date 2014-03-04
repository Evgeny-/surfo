App = angular.module('App', ['ngRoute', 'ngResource', 'ngAnimate', 'hmTouchevents', 'pasvaz.bindonce'])

App.config ($sceProvider) ->
  $sceProvider.enabled(false)