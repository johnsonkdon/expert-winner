'use strict';

/**
 * @ngdoc function
 * @name expertWinnerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the expertWinnerApp
 */
angular.module('yourApp')
  .controller('MainCtrl', function ($scope, current) {
    $scope.current = current.query();

    $scope.refreshCurrent = function(){
        $scope.current = current.query({
            location: $scope.location
        });
    };
  });
