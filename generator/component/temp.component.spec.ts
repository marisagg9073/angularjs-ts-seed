/// <reference path="<%= toComponents %>/../../typings/browser.d.ts" />

import ngModuleName from './<%= modName %>';
import <%= upCaseName %>Component from './<%= name %>.component';

'use strict';

let $module = angular.mock.module;
let $inject = angular.mock.inject;
let $dump = (arg: any): void => console.log(angular.mock.dump(arg));

describe('# <%= upCaseName %> Component', () => {
  let $log, $compile, $rootScope;

  beforeEach(() => {
    $module(ngModuleName);

    $inject((_$log_, _$compile_, _$rootScope_) => {
      $log = _$log_;
      $compile = _$compile_;
      $rootScope = _$rootScope_;
    });
  });

  it('should log registration', () => {
    let loaded = ['ngComponent', '<%= fullName %>', 'loaded'].join(' ');
    let element = $compile('<<%= fullNameSnake %>></<%= fullNameSnake %>>')($rootScope);
    $rootScope.$digest();
    expect($log.debug.logs).toContain([loaded]);
  });

  it('should fill the element with the appropriate content', () => {
    // compile a piece of HTML containing the directive
    let element = $compile('<<%= fullNameSnake %>></<%= fullNameSnake %>>')($rootScope);

    // fire all the watches
    $rootScope.$digest();

    // check that the compiled element contains the templated content
    expect(angular.element(element).children().eq(0).html()).toEqual('true');
  });
});
