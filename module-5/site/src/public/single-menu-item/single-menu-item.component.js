(function () {
"use strict";

angular.module('public')
.component('singleMenuItem', {
  templateUrl: 'src/public/single-menu-item/single-menu-item.html',
  bindings: {
    menuItem: '<'
  },
  controller: SingleMenuItemController
});


SingleMenuItemController.$inject = ['ApiPath'];
function SingleMenuItemController(ApiPath) {
  var $ctrl = this;
  $ctrl.basePath = ApiPath;
}

})();
