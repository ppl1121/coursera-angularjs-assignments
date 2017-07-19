(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['PreferenceBonusService'];
function MyInfoController(PreferenceBonusService) {
  var myinfoCtrl = this;
  myinfoCtrl.user = PreferenceBonusService.user;

}

})();
