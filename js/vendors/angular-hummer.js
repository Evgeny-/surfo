;(function () {
   var hmTouchevents = angular.module('hmTouchevents', []),
      hmGestures = [
         'hmHold:hold',
         'hmTap:tap',
         'hmDoubletap:doubletap',
         'hmDrag:drag',
         'hmDragup:dragup',
         'hmDragdown:dragdown',
         'hmDragleft:dragleft',
         'hmDragright:dragright',
         'hmSwipe:swipe',
         'hmSwipeup:swipeup',
         'hmSwipedown:swipedown',
         'hmSwipeleft:swipeleft',
         'hmSwiperight:swiperight',
         'hmTransform:transform',
         'hmRotate:rotate',
         'hmPinch:pinch',
         'hmPinchin:pinchin',
         'hmPinchout:pinchout',
         'hmTouch:touch',
         'hmRelease:release'
      ];

   angular.forEach(hmGestures, function(name){
      var directive = name.split(':'),
         directiveName = directive[0],
         eventName = directive[1];

      hmTouchevents.directive(directiveName,
         ["$parse", function($parse) {
            return {
               scope: true,

               link: function(scope, element, attr) {

                  var fn = $parse(attr[directiveName]),
                      opts = $parse(attr["hmOptions"])(scope, {});

                  if(opts && opts.group) {
                     scope.hammer = scope.hammer || Hammer(element[0], opts);
                  }
                  else {
                     scope.hammer = Hammer(element[0], opts);
                  }

                  return scope.hammer.on(eventName, function(event) {
                     return scope.$apply(function() {
                        return fn(scope, {$event: event});
                     });
                  });
               }
            };
         }
      ]);
   });
} ());

