
App.config(['AngularyticsProvider', function(Angularytics) {
   Angularytics.setEventHandlers(['GoogleUniversal']);
}]);

App.run(['Angularytics', function(Angularytics) {
   Angularytics.init();
}]);