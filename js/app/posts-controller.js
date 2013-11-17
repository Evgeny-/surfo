App.controller('PostsController',
   ['$scope', '$resource', 'store', 'zoom', 'Header', '$routeParams', 'Menu', '$timeout',
      function ($scope, $resource, store, zoom, Header, $routeParams, Menu, $timeout) {

         var offset      = 0,
            likedOffset = 0,
            canLoad     = true,
            win         = angular.element(window),
            cat         = $routeParams.cat,
            FAV         = cat === 'favorites',
            params      = {get: {method: 'JSONP', params: {callback: 'JSON_CALLBACK'}}},
            Post        = $resource(SERVER_URL + 'posts/category/:cat/:page', {}, params),
            LikedPost   = $resource(SERVER_URL + 'posts/list/:ids', {}, params),
            likedPosts  = (store.get('liked', true) || []).reverse();

         $scope.postIds = [];
         $scope.posts = [];
         $scope.liked = store.get('liked', true) || [];
         $scope.loading = false;
         $scope.updating = false;
         $scope.FAV = FAV;
         $scope.order = FAV ? 'none' : 'date';

         $scope.isLiked = function (id) {
            return $scope.liked.indexOf(id) !== -1;
         };

         $scope.like = function (id) {
            var index = $scope.liked.indexOf(id);

            if(index === -1) $scope.liked.push(id);
            else $scope.liked.splice(index, 1);

            store.set('liked', $scope.liked);
         };

         $scope.loadMore = function () {
            loadMore();
         };

         $scope.swipeDown = function () {
            if(FAV) return;

            if((window.pageYOffset || document.documentElement.scrollTop) < 10) {
               $scope.updating = true;

               loadMore(0, function () {
                  $timeout(function () {
                     $scope.updating = false;
                  }, 300);
               });
            }
         };

         $scope.swipeRight = function () {
            window.location.hash = "/";
         };

         $scope.openGif = function (ev, target) {
            var button = target ? ev.target.previousElementSibling : ev.target,
               gif = button.nextElementSibling,
               getAttr = gif.getAttribute.bind(gif),
               setAttr = gif.setAttribute.bind(gif),
               opened = getAttr('data-opened') != 'true';

            setAttr('src', getAttr(opened ? 'data-url' : 'data-preview'));
            setAttr('data-opened', opened);

            if(opened) {
               button.className = "gif loading";
               gif.onload = function () {
                  button.className = "gif loaded";
               }
            }
            else {
               button.className = "gif";
               gif.onload = angular.noop;
            }
         };

         $scope.zoomImage = function (image) {
            zoom.open(image);
         };

         $scope.loadMore();

         if(FAV) setFavHeader();
         else setHeader();

         Header.set('back', true);
         Menu.ready(setHeader);

         win.bind('scroll', onScroll);

         $scope.$on('$destroy', function () {
            win.unbind('scroll', onScroll);
            document.ontouchmove = angular.noop;
         });

         function loadMore (page, callback) {
            var liked = getList();

            if( ! canLoad || (FAV && !liked.length)) return;

            page = typeof page !== "undefined" ? page : offset++;
            canLoad = false;
            $scope.loading = true;

            if(FAV) LikedPost.get({ids: liked}, parse);
            else Post.get({page: page, cat: cat}, parse);

            function parse (res) {
               var posts = JSON.parse(res.posts);

               if(posts && FAV) posts = sortLikedPosts(posts, liked);

               angular.forEach(posts, function (post) {
                  if($scope.postIds.indexOf(+post.id) !== -1) return;
                  $scope.postIds.push(+post.id);
                  post.links = preparePostLinks(post.links, post.text);
                  $scope.posts.push(post);
               });

               if(posts.length === 12) canLoad = true;

               $scope.loading = false;
               (callback || angular.noop)();
            }
         }

         function onScroll () {
            if( ! canLoad) return;

            var scrollTop = window.pageYOffset || document.documentElement.scrollTop,
               windowHeight = window.innerHeight,
               docHeight = document.getElementById('posts').clientHeight;

            if((docHeight - windowHeight - scrollTop) < 3500) {
               loadMore();
               $scope.$apply();
               canLoad = false;
            }
         }

         function setHeader () {
            Header.set('title', Menu.getTitle(cat));
            Header.set('color', Menu.getColor(cat));
         }

         function setFavHeader () {
            Header.set('title', 'Избранное');
            Header.set('color', '#8E3D8D');
         }

         function getList () {
            var needLoad = likedPosts.slice(likedOffset, likedOffset +12);
            likedOffset += 12;
            return needLoad;
         }

         function sortLikedPosts (posts, liked) {
            return posts.sort(function (a, b) {
               return liked.indexOf(a.id) > liked.indexOf(b.id);
            })
         }

         function preparePostLinks (links, text) {
            if(!links) return [];

            return links
               .filter(function (link) {
                  return text.indexOf(link.url) === -1;
               })
               .map(function (link) {
                  link.title = link.title || link.url;

                  if(link.title.length > 30) {
                     var title = "",
                        word = 0,
                        words = link.title.split(' ');

                     while(title.length < 30) {
                        title += words[word++] + ' ';
                     }

                     link.title = title.slice(0, -1) + '...';
                  }

                  return link;
               });
         }

      }]
);