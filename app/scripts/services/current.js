'use strict';

/**
 * @ngdoc service
 * @name expertWinnerApp.current
 * @description
 * # current
 * Factory in the expertWinnerApp.
 */
angular.module('yourApp')
  .factory('current', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('http://api.openweathermap.org/data/2.5/weather?q=:location&units=imperial&APPID=d9947bfbe4d5f42fa39c0d5e08ff915f', {}, {
      query: {
        method:'GET',
        params:{
          location: 'Seattle,us'
        },
        isArray:false
      }
    });
  });
