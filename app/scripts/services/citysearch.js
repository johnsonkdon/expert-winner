'use strict';

/**
 * @ngdoc service
 * @name expertWinnerApp.citysearch
 * @description
 * # citysearch
 * Factory in the expertWinnerApp.
 */
angular.module('expertWinnerApp')
  .factory('citysearch', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('http://api.openweathermap.org/data/2.5/find?q=:query&type=like&mode=json&APPID=32d4223cc8559f298c1b30272de9d67c', {}, {
      find: {
        method: 'GET',
        params: {
          query: 'seattle'
        },
        isArray: false
      }
    });
  });
