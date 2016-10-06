'use strict';

/**
 * @ngdoc service
 * @name wavesApp.hollidayHelper
 * @description
 * # hollidayHelper
 * Service in the wavesApp.
 */
angular.module('wavesApp')
  .service('hollidayHelper', function () {
    return {
      normalizeHollidays: function(hollidays){
        return hollidays.map(function(holliday){
          return { 
            desc: holliday.motivo, 
            month: holliday.mes,
            day:   holliday.dia,
            inDays: moment( moment().format('YYYY') + '-' + 
                          holliday.mes + '-' + 
                          holliday.dia)
                  .fromNow()
          };
        });
      }
    };
  });
