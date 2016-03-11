/// <reference path="../../../typings/browser.d.ts" />

import Example from './example';

'use strict';

let $module = angular.mock.module;
let $inject = angular.mock.inject;
let $dump = (arg: any): void => console.log(angular.mock.dump(arg));
let expect = chai.expect;

describe('# Example Module', () => {
  beforeEach($module(Example));

  describe('## Existence', () => {
    let mod;

    beforeEach(() => mod = angular.module(Example));

    it('should exist', () => {
      expect(mod).not.to.be.undefined;
      expect(mod).not.to.be.null;
    });

    it('should have deps', () => {
      expect(mod.requires).to.contain('ngNewRouter');
    });
  });

  describe('## Log enabled', () => {
    let $log;

    beforeEach('registering log', () => {
      $inject(_$log_ => {
        $log = _$log_;
      });
    });

    it('should log registration', () => {
      let loaded = ['ngModule', Example, 'loaded'].join(' ');
      expect($log.debug.logs[0][0]).to.contain([loaded]);
    });
  });

  describe('## Log disabled', () => {
    let $log;

    beforeEach(() => {
      $module(function($logProvider) {
        $logProvider.debugEnabled(false);
      });

      $inject(_$log_ => {
        $log = _$log_;
      });
    });

    it('should not log registration', () => {
      expect($log.assertEmpty).not.to.throw();
    });
  });
});
