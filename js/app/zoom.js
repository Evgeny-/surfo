App.factory('zoom',
   ['$rootScope', function ($rootScope) {
      var opened = false;

      return {
         opened : function () {
            return opened;
         },

         open : function (image) {
            $rootScope.$emit('zoom:open', this.createImage(image));
            opened = true;
         },

         close : function () {
            $rootScope.$emit('zoom:close', null);
            opened = false;
         },

         createImage : function (url) {
            var img = new Image();
            img.src = url;
            return img;
         }
      }
   }]
);