(function () {
'use strict';

angular.module('data')
.controller('MainItemsController', MainItemsController);


MainItemsController.$inject = ['$stateParams', 'myitems'];
function MainItemsController($stateParams, myitems) {
  var mainitems = this;
  mainitems.items = myitems;
  mainitems.category = $stateParams.categoryName;
}

})();
