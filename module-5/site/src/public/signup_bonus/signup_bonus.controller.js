(function () {
"use strict";

angular.module('public')
.controller('SignUpBonusController', SignUpBonusController);

SignUpBonusController.$inject = ['PreferenceBonusService', 'myMenuItems','$scope'];
function SignUpBonusController(PreferenceBonusService, myMenuItems, $scope) {
  var signupCtrl = this;
  signupCtrl.notFound = false;
  signupCtrl.Found = false;
  signupCtrl.user = {};
  signupCtrl.user.firstname = "";
  signupCtrl.user.lastname = "";
  signupCtrl.user.email = "";
  signupCtrl.user.phone = "";
  signupCtrl.user.short_name = "";
  signupCtrl.checkItem = function () {
      if(!$scope.regForm.menu.$error.required){
          for(var i=0; i<myMenuItems.length; i++){
            if(signupCtrl.user.short_name === myMenuItems[i].short_name){
                PreferenceBonusService.user.menuItem = myMenuItems[i];
                signupCtrl.notFound = false;
                $scope.regForm.$invalid = false;
                return;
            }
          }
          signupCtrl.Found = false;
          signupCtrl.notFound = true;
          $scope.regForm.$invalid = true;
          return;
      }
          


          
  };

  signupCtrl.submit = function () {
          PreferenceBonusService.user.firstname = signupCtrl.user.firstname;
          PreferenceBonusService.user.lastname = signupCtrl.user.lastname;
          PreferenceBonusService.user.email = signupCtrl.user.email;
          PreferenceBonusService.user.phone = signupCtrl.user.phone;
          PreferenceBonusService.user.success = true;
          signupCtrl.Found = true;

  };
}

})();
