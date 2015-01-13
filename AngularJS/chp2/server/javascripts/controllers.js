'use strict';
(function () {
  var shoppingModule = angular.module('ShoppingApp', []);
  shoppingModule.controller('ShoppingController', ['$scope', '$http', function($scope, $http) {
    $http.get('/products/products.json').success(function(data, status, headers, config) {
      $scope.items = data;
    });

    $scope.remove = function(index) {
      $scope.items.splice(index, 1)
    }
  }]);
})();
