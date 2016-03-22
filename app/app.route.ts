'use strict';

let routing = ($locationProvider: angular.ILocationProvider) => {
  $locationProvider.html5Mode(true);
};

routing.$inject = ['$locationProvider'];

export default routing;
