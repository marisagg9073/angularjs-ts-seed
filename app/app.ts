/// <reference path="../typings/browser.d.ts" />

import routing from './app.route';
import {components} from './components/components';
import {Service}   from './services/names-list';
/*
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
      templateUrl: 'table/table.tpl.html',
      data: {
        title: 'Table'
      }
    });

  $urlRouterProvider.otherwise('/dashboard');
};

routing.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];
*/

const ngMainComponentName = 'tsfnApp';

let app = angular.module('app', [
  'ngComponentRouter',
  'ngAnimate',
  'ngCookies',
  'ngSanitize',
  // 'ngTouch',
  'nvd3',
  components.name,
  Service.NamesList.moduleName,
]).config(routing)
  .value('$routerRootComponent', ngMainComponentName);

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
}

@at.component('app', ngMainComponentName, {
  templateUrl: 'app.html?v=<%= VERSION %>',
  $routeConfig: [
    { path: '/...', name: 'Main', component: 'tsfnMain' },
  ]
})
@at.inject('$log')
class App implements at.IComponent {
  constructor(private log: angular.ILogService) {
    log.debug(['ngComponent', ngMainComponentName, 'loaded'].join(' '));
  }
}

export default app;

// angular.element(document)
//   .ready(() => angular.bootstrap(document.body, [app.name]));
