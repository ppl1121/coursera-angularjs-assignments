(function () {
'use strict';

angular.module('data')
.controller('MainCategoriesController', MainCategoriesController);


MainCategoriesController.$inject = ['mycategories'];
function MainCategoriesController(mycategories) {
  var maincategories = this;
  maincategories.categories = mycategories;
}

})();
