'use strict';

let routing = ($locationProvider: angular.ILocationProvider) => {
  $locationProvider.html5Mode(false);
};

routing.$inject = ['$locationProvider'];

export default routing;
