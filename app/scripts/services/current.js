'use strict';

/**
 * @ngdoc service
 * @name expertWinnerApp.current
 * @description
 * # current
 * Factory in the expertWinnerApp.
 */
angular.module('expertWinnerApp')
  .factory('current', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('http://api.openweathermap.org/data/2.5/weather?id=:cityID&units=imperial&APPID=d9947bfbe4d5f42fa39c0d5e08ff915f', {}, {
      query: {
        method:'GET',
        params:{
          cityID: '4717560' // Paris, France ID
        },
        isArray:false
      }
    });
  });
