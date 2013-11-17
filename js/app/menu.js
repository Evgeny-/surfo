App.factory('Menu',
   ['$resource', 'store', function ($resource, store) {
      var callbacks = [],
         params = {query: {method: 'JSONP', isArray: true, params: {callback: 'JSON_CALLBACK'}}},
         res = $resource(SERVER_URL + 'data/menu', {}, params),
         menu = store.get('menu', true) || [];

      function checkMenu (newMenu) {
         if( ! angular.equals(menu, newMenu)) {
            menu = newMenu;
            store.set('menu', menu);
            callbacks.map(function (cb){cb();});
         }
      }

      res.query({}, function (data) {
         checkMenu(data);
      });

      return {
         menu : function () {
            return menu;
         },
         ready : function (cb) {
            callbacks.push(cb);
         },
         getTitle : function (cat) {
            if(!menu) return APP_NAME;

            for (var i = 0; i < menu.length; i++) {
               var parent = menu[i];

               for (var j = 0; j < parent.submenu.length; j++) {
                  var m = parent.submenu[j];

                  if(m.id == cat) {
                     return m.name;
                  }
               }

            }
         },
         getColor : function (cat) {
            if(!menu) return null;

            for (var i = 0; i < menu.length; i++) {
               var parent = menu[i];

               for (var j = 0; j < parent.submenu.length; j++) {
                  var m = parent.submenu[j];

                  if(m.id == cat) {
                     return parent.color;
                  }
               }

            }
         }
      }
   }]
);