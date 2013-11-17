var SERVER_URL = "http://surfo.ru/";

var App = angular.module('App',
   ['hmTouchevents', 'angularMoment', 'ngResource', 'angularytics'], null
);

App.config(['$routeProvider', function($routeProvider) {
   $routeProvider
      .when('/', {templateUrl: 'views/main.html'})
      .when('/posts/:cat', {templateUrl: 'views/posts.html'})
      .otherwise({redirectTo: '/'});
}]);

App.run(['$rootScope', function ($rootScope) {
   $rootScope.getPhoto = function (photo) {
      return $rootScope.isTablet ? photo.big: photo.small;
   };
}]);

function getUUID () {
   var generateUUID = function () {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
         var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
         return v.toString(16);
      });
   };

   var uuid = myStore.get('UUID');

   if(uuid) return uuid;

   uuid = generateUUID();
   myStore.set('UUID', uuid);

   return uuid;
}

function Zoom (wrapId) {
   var wrap = document.getElementById(wrapId);

   var hammertime = Hammer(wrap, {
      transform_always_block: true,
      transform_min_scale: 1,
      drag_block_horizontal: true,
      drag_block_vertical: true,
      drag_min_distance: 100
   });

   var rect = wrap.getElementsByTagName('img')[0];

   var posX = 0, posY = 0,
       scale = 1, last_scale,
       rotation = 1, last_rotation;

   hammertime.on('touch drag transform', function(ev) {
      var prevent = false;
      switch(ev.type) {
         case 'touch':
            last_scale = scale;
            last_rotation = rotation;
            break;

         case 'drag':
            prevent = true;
            posX = ev.gesture.deltaX;
            posY = ev.gesture.deltaY;
            break;

         case 'transform':
            prevent = true;
            rotation = last_rotation + ev.gesture.rotation;
            scale = Math.max(1, Math.min(last_scale * ev.gesture.scale, 10));
            break;
      }

      if(prevent) {
         ev.preventDefault();
         ev.gesture.preventDefault();
      }

      var transform =
         "translate3d("+posX+"px,"+posY+"px, 0) " +
            "scale3d("+scale+","+scale+", 1)";

      rect.style.transform = transform;
      rect.style.oTransform = transform;
      rect.style.msTransform = transform;
      rect.style.mozTransform = transform;
      rect.style.webkitTransform = transform;
   });
};