(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['PreferenceService'];
function SignUpController(PreferenceService) {
  var signupCtrl = this;
  signupCtrl.hasError = false;
  signupCtrl.hasValidation = false;
  signupCtrl.user = {};
  signupCtrl.user.firstname = "";
  signupCtrl.user.lastname = "";
  signupCtrl.user.email = "";
  signupCtrl.user.phone = "";
  signupCtrl.user.short_name = "";
  signupCtrl.getMenuItem = function (short_name) {
  								PreferenceService.getMenuItem(short_name)
  								.then(function (response) {
                        PreferenceService.user.menuItem = response.data;
                        PreferenceService.user.firstname = signupCtrl.user.firstname;
                        PreferenceService.user.lastname = signupCtrl.user.lastname;
                        PreferenceService.user.email = signupCtrl.user.email;
                        PreferenceService.user.phone = signupCtrl.user.phone;
                        PreferenceService.user.success = true;
                        signupCtrl.hasError = false;
                        signupCtrl.hasValidation = true;
                        
    								 })
  								.catch(function (error) {
                        PreferenceService.user.success = false;
  										  signupCtrl.hasError = true;
                        signupCtrl.hasValidation = false;
  								});
  };
}

})();
