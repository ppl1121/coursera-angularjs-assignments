(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      items: '<',
      onRemove: '&',
      foundOrNot: '<'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'foundItems',
    bindToController: true
  };

  return ddo;
}

function FoundItemsDirectiveController() {
  var foundItems = this;
}



NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var NarrowItDown = this;
  NarrowItDown.description = "";
  NarrowItDown.foundOrNot = true;
  NarrowItDown.getMatchedMenuItems = function (seachTerm){
    if(seachTerm == ""){
      NarrowItDown.foundOrNot = false;
      NarrowItDown.found = [];
    }
    else{
      MenuSearchService.getMatchedMenuItems(seachTerm).then(function(items){
        NarrowItDown.found = items;
        if(NarrowItDown.found.length == 0){
          NarrowItDown.foundOrNot = false;
        }
        else{
          NarrowItDown.foundOrNot = true;
        }
      });
    }
  }
  NarrowItDown.removeItem = function (itemIndex) {
    this.found.splice(itemIndex, 1);
  };
}

MenuSearchService.$inject = ['$q', '$http'];
function MenuSearchService($q, $http) {
  var service = this;
  service.getMatchedMenuItems = function (searchTerm){
    return $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
    }).then(function (result) {
    // process result and only keep items that match
    var deferred = $q.defer();
    var foundItems = deferred.promise;
    var items = [];
    var itemsArray = result.data.menu_items;
    for(var i=0;i<itemsArray.length;i++){
      if(itemsArray[i].description.indexOf(searchTerm) != -1 ){
          items.push(itemsArray[i]);
      }
    }
    deferred.resolve(items);
    return foundItems;
    });
  }
}

})();