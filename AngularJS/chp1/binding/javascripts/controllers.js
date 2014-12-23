'use strict';
(function () {
    var app = angular.module('BindingApp', []);
    app.controller('BindingController', ['$scope', function ($scope) {
      $scope.greeting = { text: 'Hello' }
    }]);
})();
