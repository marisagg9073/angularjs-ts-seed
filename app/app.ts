/// <reference path="../typings/browser.d.ts" />

import {components} from './components/components';
import {Service}   from './services/names-list';

let app = angular.module('app', [
  'ngNewRouter',
  components.name,
  Service.NamesList.moduleName
]);

// @at.controller('app', 'AppController')
@at.directive('app', 'app', {
  // controller: 'AppController',
  link: (scope, element, attrs, ctrl) => {
    console.log('App.directive', 'init');
  },
  restrict: 'E',
  templateUrl: 'app.html?v=<%= VERSION %>'
})
class AppController {

  constructor( @at.inject('$router') $router) {

    let appRoutes: Array<angular.RouteDefinition> = [
      { component: 'home', path: '/', useAsDefault: true },
      { component: 'feature1', path: '/feature1' },
      { component: 'about', path: '/about' }
    ];

    $router.config(appRoutes);
  }
}
/*
@at.directive('app', 'app')
class App {
  public static restrict = 'E';
  public static templateUrl = 'app.html?v=<%= VERSION %>';
  public static controller = AppController;
  public static link: angular.IDirectiveLinkFn = (scope, element, attrs, ctrl: App) => {
    console.log('App.directive', 'init');
  };
}
*/

export {app}

angular.element(document)
  .ready(() => angular.bootstrap(document.body, [app.name]));
