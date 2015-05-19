;(function () {
    'use strict';

    var app = angular.module('app', []);

    app.controller('main-controller', function($scope, $http) {
        $scope.title = 'GOYA Boilerplate';
    });
})();
