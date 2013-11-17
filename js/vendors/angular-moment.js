angular.module('angularMoment', []).directive('amTimeAgo',
   ['$window', '$timeout', '$parse', function ($window, $timeout, $parse) {
		return function (scope, element, attr) {
			var activeTimeout = null;

			function cancelTimer() {
				if (activeTimeout) {
					$timeout.cancel(activeTimeout);
					activeTimeout = null;
				}
			}

			function updateTime(momentInstance) {
				element.text(momentInstance.fromNow());

				activeTimeout = $timeout(function () {
					updateTime(momentInstance);
				}, 60 * 1000, false);
			}

         updateTime($window.moment(new Date($parse(attr.amTimeAgo)(scope) * 1000)));

			scope.$on('$destroy', cancelTimer);
		};
	}]
);
