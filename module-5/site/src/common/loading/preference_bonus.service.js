(function () {
"use strict";

angular.module('common')
.service('PreferenceBonusService', PreferenceBonusService);

PreferenceBonusService.$inject = ['$http', 'ApiPath'];
function PreferenceBonusService($http, ApiPath) {
  var service = this;
  service.user = {};
  service.user.success = false;
  service.user.firstname = "";
  service.user.lastname = "";
  service.user.email = "";
  service.user.phone = "";
  service.getMenuItem = function () {
                          return  $http.get(ApiPath + '/menu_items.json')
                                       .then(function (response) {
                                                return response.data.menu_items;
                                            });                               
                        };
}

})();
