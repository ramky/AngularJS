'use strict';
(function () {
    var app = angular.module('HelloApp', []);
    app.controller('HelloController', ['$scope', function ($scope) {
      $scope.greeting = 'Hello World!';
    }]);
})();
