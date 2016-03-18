/// <reference path="../typings/browser.d.ts" />

import {components} from './components/components';
import {Service}   from './services/names-list';

let routing = ($locationProvider: angular.ILocationProvider,
  $stateProvider: angular.ui.IStateProvider,
  $urlRouterProvider: angular.ui.IUrlRouterProvider) => {
  // $locationProvider.html5Mode(true).hashPrefix('!');

  $stateProvider
    .state('home', {
      url: '',
      templateUrl: 'main/main.tpl.html',
      controller: 'MainController',
      controllerAs: 'vm',
      abstract: true
    })
    .state('home.dashboard', {
      url: '/dashboard',
      templateUrl: 'dashboard/dashboard.tpl.html',
      data: {
        title: 'Dashboard'
      }
    })
    .state('home.profile', {
      url: '/profile',
      templateUrl: 'profile/profile.tpl.html',
      controller: 'ProfileController',
      controllerAs: 'vm',
      data: {
        title: 'Profile'
      }
    })
    .state('home.table', {
      url: '/table',
      controller: 'TableController',
      controllerAs: 'vm',
      templateUrl: 'app/views/table.html',
      data: {
        title: 'Table'
      }
    });

  $urlRouterProvider.otherwise('/dashboard');
};

routing.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

let app = angular.module('app', [
  // 'ngNewRouter',
  'ui.router',
  'ngAnimate',
  'ngCookies',
  'ngSanitize',
  // 'ngTouch',
  'nvd3',
  components.name,
  Service.NamesList.moduleName,
]).config(routing);

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

  // constructor( @at.inject('$router') $router) {

  //   let appRoutes: Array<angular.RouteDefinition> = [
  //     { component: 'home', path: '/', useAsDefault: true },
  //     { component: 'feature1', path: '/feature1' },
  //     { component: 'about', path: '/about' }
  //   ];

  //   $router.config(appRoutes);
  // }
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

const ngComponentName = 'tsfnApp';

@at.component('app', ngComponentName, {
  templateUrl: 'app.html?v=<%= VERSION %>'
})
@at.inject('$log')
class App {
  constructor(private log: angular.ILogService) {
    log.debug(['ngComponent', ngComponentName, 'loaded'].join(' '));
  }
}

export default app;

// angular.element(document)
//   .ready(() => angular.bootstrap(document.body, [app.name]));
