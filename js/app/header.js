App.factory('Header',
   ['$rootScope', function ($rootScope) {
      return {
         title : 'Application',
         back : false,
         set : function (key, value) {
            this[key] = value;
            $rootScope.$emit('Header:'+key, value);
         }
      }
   }]
);