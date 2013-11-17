angular.module("App").run(["$templateCache", function($templateCache) {

  $templateCache.put("views/main.html",
    "<div ng-controller=\"IndexController\" class=\"menu-container\">\n" +
    "   <div class=\"button-container\" ng-repeat=\"(id, menu) in menus\" ng-style=\"{background: menu.color}\">\n" +
    "      <div class=\"button\" hm-tap=\"openMenu($index, menu.submenu.length)\">\n" +
    "         <i class=\"menu-icon-{{ menu.icon }}\"></i> {{ menu.name }}\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"submenu-container\" ng-class=\"{opened: $index === showedMenu}\"> <!-- ng-animate=\"'submenu'\"-->\n" +
    "         <div ng-repeat=\"smenu in menu.submenu\" hm-tap=\"openCategory(smenu.id)\">{{ smenu.name }}</div>\n" +
    "      </div>\n" +
    "   </div>\n" +
    "\n" +
    "   <div class=\"button-container\">\n" +
    "      <div class=\"button favorite\" hm-tap=\"openFavorite()\">\n" +
    "         <i class=\"menu-icon-fav\"></i> Избранное\n" +
    "      </div>\n" +
    "   </div>\n" +
    "</div>"
  );

  $templateCache.put("views/posts.html",
    "<table ng-controller=\"HeaderController\" ng-show=\"!isTablet\" ng-style=\"{background: colorHeader}\" id=\"header\">\n" +
    "    <tr>\n" +
    "        <td hm-tap=\"back()\" class=\"back\"><span class=\"icon-angle-left\"></span></td>\n" +
    "        <td hm-tap=\"back()\" ng-bind=\"title\" class=\"title\"></td>\n" +
    "        <td hm-tap=\"scrollTop()\" class=\"top\"><span class=\"icon-angle-up\"></span></td>\n" +
    "    </tr>\n" +
    "</table>\n" +
    "\n" +
    "<div class=\"header-push\"></div>\n" +
    "\n" +
    "<div ng-controller=\"PostsController\" id=\"posts\" hm-swipedown=\"swipeDown()\">\n" +
    "  <div ng-class=\"{opened: updating}\" class=\"updating\">Обновление <span class=\"icon-spin4 animate-spin\"></span></div>\n" +
    "  <div ng-class=\"{opened: FAV && !liked.length}\" class=\"updating\">Вы еще не сохранили ни одного поста.</div>\n" +
    "\n" +
    "  <div ng-repeat=\"post in posts | orderBy:order:true\" class=\"post\">\n" +
    "\n" +
    "     <div class=\"post-inner\" bind-links=\"\">\n" +
    "        <div class=\"text\" ng-show=\"post.text.length\" ng-init=\"text = (post.text | readMore); show=false\">\n" +
    "           <span ng-bind-html-unsafe=\"text[0]\"></span>\n" +
    "           <a ng-show=\"text[1] && ! show\" ng-click=\"show=true\" class=\"read-more\">Читать далее</a>\n" +
    "           <span ng-show=\"show\" ng-bind-html-unsafe=\"text[1]\"></span>\n" +
    "        </div>\n" +
    "\n" +
    "       <div ng-repeat=\"photo in post.photos\" class=\"image-container\">\n" +
    "          <span class=\"zoom\" ng-click=\"zoomImage(photo.big)\"></span>\n" +
    "          <img ng-src=\"{{ getPhoto(photo) }}\" class=\"image\">\n" +
    "       </div>\n" +
    "\n" +
    "       <div ng-repeat=\"gif in post.gifs\" class=\"image-container\">\n" +
    "          <span class=\"gif\" ng-click=\"openGif($event)\">Загрузка...</span>\n" +
    "          <img ng-src=\"{{ gif.preview }}\" data-url=\"{{ gif.url }}\" ng-click=\"openGif($event, true)\" data-preview=\"{{ gif.preview }}\" data-opened=\"false\" class=\"image gif-image\">\n" +
    "       </div>\n" +
    "\n" +
    "      <a ng-show=\"post.links[0]\" ng-href=\"{{ post.links[0].url }}\" ng-bind=\"post.links[0].title\" class=\"single-link\"></a>\n" +
    "\n" +
    "     </div>\n" +
    "\n" +
    "     <div class=\"meta\">\n" +
    "        <table>\n" +
    "           <tr>\n" +
    "              <td class=\"avatar-td\">\n" +
    "                  <img ng-src=\"{{post.groupAvatar}}\">\n" +
    "              </td>\n" +
    "              <td class=\"name-td\">\n" +
    "                  <div class=\"group\" ng-bind=\"post.group\"></div>\n" +
    "                  <div am-time-ago=\"post.date\" class=\"time\"></div>\n" +
    "              </td>\n" +
    "              <td class=\"like-td\">\n" +
    "                 <span hm-tap=\"like(post.id)\" class=\"like\" ng-class=\"{active: isLiked(post.id)}\"></span>\n" +
    "              </td>\n" +
    "           </tr>\n" +
    "        </table>\n" +
    "     </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div ng-show=\"loading\" class=\"loading\">Загрузка контента <span class=\"icon-spin4 animate-spin\"></span></div>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-controller=\"ZoomController\">\n" +
    "  <div id=\"zoom\" ng-show=\"zoomOpened\">\n" +
    "     <div class=\"overlay\" hm-tap=\"close()\"></div>\n" +
    "     <div class=\"image\" id=\"zoom-wrap\" hm-tap=\"close()\">\n" +
    "        <img ng-src=\"{{image}}\" id=\"zoom-image\" hm-tap=\"close()\">\n" +
    "     </div>\n" +
    "  </div>\n" +
    "  </div>"
  );

}]);
