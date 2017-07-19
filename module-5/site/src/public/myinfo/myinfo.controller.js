(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['PreferenceService'];
function MyInfoController(PreferenceService) {
  var myinfoCtrl = this;
  myinfoCtrl.user = PreferenceService.user;

}

})();
