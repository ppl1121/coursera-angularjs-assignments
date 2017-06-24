(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.items = "";
  $scope.result = "";
  $scope.fontcolor = "";
  $scope.checkItems = function () {
    if ($scope.items === ""){
    	$scope.result = "Please enter data first!";
    	$scope.fontcolor = "red";
    }
    else{
    	var resultarray = $scope.items.split(",");
    	var counter = 0;
    	for(var i=0;i<resultarray.length;i++){
    		counter++;
    	}
    	if(counter<=3){
    		$scope.result = "Enjoy!";
    	}
    	else{
    		$scope.result = "Too much!";
    	}
    	$scope.fontcolor = "green";
    }
    
  };
}
})();
