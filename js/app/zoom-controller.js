App.controller('ZoomController',
   ['$scope', '$rootScope', 'zoom', function ($scope, $rootScope, zoom) {

      var img = document.getElementById('zoom-image'),
          evented = false;

      if( ! evented) {
         Zoom('zoom-wrap');
         evented = true;
      }

      $rootScope.zoomOpened = false;

      $scope.image = null;
      $scope.close = zoom.close;

      $rootScope.$on('zoom:close', function () {
         img.style.width = null;
         img.style.height = null;
         img.style.marginTop = null;
         img.style.marginLeft = null;
         img.style.transform = null;
         img.style.oTransform = null;
         img.style.msTransform = null;
         img.style.mozTransform = null;
         img.style.webkitTransform = null;
         close();
      });

      $rootScope.$on('zoom:open', function (e, imgRes) {
         $rootScope.zoomOpened = true;
         $scope.image = imgRes.src;
         imgRes.onload = function (e) {
            var target = e.target,
                imgH = target.height,
                imgW = target.width,
                ratio = imgW / imgH,
                wH = window.innerHeight,
                wW = window.innerWidth;

            if(imgW > wW) {
               imgW = wW - 20;
               imgH = imgW / ratio;
            }

            if(imgH > wH) {
               imgH = wH - 20;
               imgW = imgH * ratio;
            }

            //img.style.width = imgH + 'px';
            img.style.height = imgH + 'px';
            img.style.marginTop = - imgH / 2 + 'px';
            img.style.marginLeft = - imgW / 2 + 'px';
         };
      });

      function close () {
         $scope.opened = false;
         $scope.image = null;
         $rootScope.zoomOpened = null;
      }

   }]
);