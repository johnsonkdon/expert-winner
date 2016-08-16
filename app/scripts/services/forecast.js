'use strict';

/**
 * @ngdoc service
 * @name expertWinnerApp.forecast
 * @description
 * # forecast
 * Factory in the expertWinnerApp.
 */
angular.module('expertWinnerApp')
   .factory('forecast', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('http://api.openweathermap.org/data/2.5/forecast/daily?id=:cityID&cnt=16&units=imperial&APPID=32d4223cc8559f298c1b30272de9d67c', {}, {
      query: {
        method:'GET',
        params:{
          cityID: '4717560' // Paris, France ID
        },
        isArray:false
      }
    });
  });
