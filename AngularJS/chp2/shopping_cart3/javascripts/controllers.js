'use strict';
(function (){
  var shoppingCartModule = angular.module('ShoppingCartModule', []);

  shoppingCartModule.factory('Items', function() {
    var items = {};
    items.query = function() {
      return [
        {title: 'Paint pots', quantity: 8, price: 3.95},
        {title: 'Polka dots', quantity: 17, price: 12.95},
        {title: 'Pebbles', quantity: 5, price: 6.95}
      ];
    }
  });

  shoppingCartModule.controller('ShoppingCartController',
      ['$scope', 'Items', function($scope, Items) {

    $scope.remove = function(index) {
      $scope.items.splice(index, 1);
    }
  }]);
})();

