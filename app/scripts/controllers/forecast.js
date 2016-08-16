'use strict';

/**
 * @ngdoc function
 * @name expertWinnerApp.controller:ForecastCtrl
 * @description
 * # ForecastCtrl
 * Controller of the expertWinnerApp
 */
angular.module('expertWinnerApp')
  .controller('ForecastCtrl', function ($scope, $routeParams, forecast) {
    $scope.cityID = $routeParams.cityID;

    $scope.forecastData = forecast.query({
        cityID: $routeParams.cityID
    });
  });

