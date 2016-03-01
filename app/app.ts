/// <reference path="../typings/browser.d.ts" />


import {components} from './components/components';
import {services}   from './services/services';

let app = angular.module('app', [
  'ngNewRouter',
  components.name,
  services.name
]);

class AppController {
  static $inject = ['$router'];

  constructor($router) {

    let appRoutes:Array<angular.RouteDefinition> = [
      { path: '/', component: 'home' },
      { path: '/feature1', component: 'feature1' },
      { path: '/about', component: 'about' }
    ];

    $router.config(appRoutes);
  }
}

app.directive('app', () => {
  return {
    restrict: 'E',
    templateUrl: 'app.html?v=<%= VERSION %>',
    controller: AppController
  };
});


export {app}

angular.element(document)
  .ready(() => angular.bootstrap(document.body, [app.name]));
