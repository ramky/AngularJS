'use strict';
(function (){
  var app = angular.module('FundingApp', []);
  app.controller('FundingController', ['$scope', function($scope) {
    $scope.funding = { startingEstimate: 0 }
    $scope.computeNeeded = function() {
      $scope.funding.needed = $scope.funding.startingEstimate * 10;
    };
    $scope.requestFunding = function() {
      window.alert("Sorry, please get more customers first.")
    }
  }]);
})();
