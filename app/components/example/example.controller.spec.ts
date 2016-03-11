/// <reference path="../../../typings/browser.d.ts" />

import Example from './example';
import ExampleController from './example.controller';

'use strict';

let $module = angular.mock.module;
let $inject = angular.mock.inject;
let $dump = (arg: any): void => console.log(angular.mock.dump(arg));
let expect = chai.expect;

describe('# Example Controller', () => {
  let $controller, $log;
  let controller: ExampleController;

  beforeEach(() => {
    $module(Example);

    $inject((_$controller_, _$log_) => {
      $controller = _$controller_;
      $log = _$log_;
    });

    controller = $controller('ExampleController', { $scope: {} });
  });

  describe('## Existence', () => {
    it('should exist', () => {
      expect(controller).not.to.be.undefined;
      expect(controller).not.to.be.null;
    });

    it('should be an instance of ExampleController', () => {
      expect(controller).to.be.an.instanceof(ExampleController);
    });
  });

  describe('## Log enabled', () => {
    it('should log registration', () => {
      let loaded = ['ngController', 'ExampleController', 'loaded'].join(' ');
      expect($log.debug.logs[1]).to.contain(loaded);
    });
  });

  describe('## Names property', () => {
    it('should be empty', () => {
      expect(controller.listNames()).to.be.empty;
      expect(controller.readNames()).to.be.empty;
    });

    it('should be populated', () => {
      let elementX = 'x';
      controller.addName(elementX);
      expect(controller.listNames()).to.eql(elementX);
      expect(controller.readNames()).to.eql([elementX]);

      let elementY = 'y';
      controller.addName(elementY);
      expect(controller.listNames(':')).to.eql([elementX, elementY].join(':'));
      expect(controller.readNames()).to.eql([elementX, elementY]);
    });
  });
});
