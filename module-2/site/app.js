(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListService', ShoppingListService);

ToBuyController.$inject = ['ShoppingListService'];
function ToBuyController(ShoppingListService) {
  var ToBuy = this;

  ToBuy.items = ShoppingListService.getTobuy_itmes();
  ToBuy.message = ShoppingListService.getMessage();
  

  ToBuy.buyItem = function (itemIndex) {
    ShoppingListService.buyItems(itemIndex);

  }
}


AlreadyBoughtController.$inject = ['ShoppingListService'];
function AlreadyBoughtController(ShoppingListService) {
  var AlreadyBought = this;

  AlreadyBought.items = ShoppingListService.getAlreadybought_itmes();
  AlreadyBought.message = ShoppingListService.getMessage();
}


function ShoppingListService() {
  var service = this;

  // List of AlreadyBought items
  var tobuy_items = [
    {
      name: "cookies",
      quantity: 10
    },
    {
      name: "banana",
      quantity: 5
    },
    {
      name: "chips",
      quantity: 8
    },
    {
      name: "pepsi",
      quantity: 2
    },
    {
      name: "apple",
      quantity: 6
    },
    ];

  // List of AlreadyBought items
  var alreadybought_items = [];

  var message = {
     tobuy_message: "",
     alreadybought_message: "Nothing bought yet"
  } ;


  service.buyItems = function (itemIndex) {
    var boughtItem = tobuy_items.splice(itemIndex, 1)[0];
    alreadybought_items.push(boughtItem);
    if(tobuy_items.length == 0){
       message.tobuy_message = "Everything is bought!";
    }
    if(alreadybought_items.length > 0){
      message.alreadybought_message = "";
    }
  };


  service.getTobuy_itmes = function () {
    return tobuy_items;
  };

  service.getAlreadybought_itmes = function () {
    return alreadybought_items;
  };

  service.getMessage = function () {
    return message;
  };

}

})();