(function () {
"use strict";

angular.module('common')
.service('PreferenceService', PreferenceService);

PreferenceService.$inject = ['$http', 'ApiPath'];
function PreferenceService($http, ApiPath) {
  var service = this;
  service.user = {};
  service.user.success = false;
  service.user.firstname = "";
  service.user.lastname = "";
  service.user.email = "";
  service.user.phone = "";
  service.getMenuItem = function (short_name) {
                          return  $http.get(ApiPath + '/menu_items/' + short_name + '.json')                               
                        };
}

})();
