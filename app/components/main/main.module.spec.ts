/// <reference path="../../../typings/browser.d.ts" />

import Main from './main';

'use strict';

let $module = angular.mock.module;
let $inject = angular.mock.inject;
let $dump = (arg: any): void => console.log(angular.mock.dump(arg));

describe('# Main Module', () => {
  beforeEach($module(Main));

  describe('## Existence', () => {
    let mod;

    beforeEach(() => mod = angular.module(Main));

    it('should exist', () => {
      expect(mod).not.toBeUndefined();
      expect(mod).not.toBeNull;
    });

    it('should have deps', () => {
      expect(mod.requires).toContain('ngComponentRouter');
      expect(mod.requires).toContain('app.components.material');
      expect(mod.requires).toContain('app.components.bottomSheet');
    });
  });

  describe('## Log enabled', () => {
    let $log;

    beforeEach(() => {
      $inject(_$log_ => {
        $log = _$log_;
      });
    });

    it('should log registration', () => {
      let loaded = ['ngModule', Main, 'loaded'].join(' ');
      expect($log.debug.logs).toContain([loaded]);
    });
  });

  describe('## Log disabled', () => {
    let $log;

    beforeEach(() => {
      $module($logProvider => {
        $logProvider.debugEnabled(false);
      });

      $inject(_$log_ => {
        $log = _$log_;
      });
    });

    it('should not log registration', () => {
      expect($log.assertEmpty).not.toThrow();
    });
  });
});
