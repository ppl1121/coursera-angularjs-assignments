(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://ppl1121-angularjs.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
