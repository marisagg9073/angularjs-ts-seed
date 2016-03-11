/// <reference path="../../../typings/browser.d.ts" />

import Example from './example';
import ExampleController from './example.controller';

'use strict';

let $module = angular.mock.module;
let $inject = angular.mock.inject;
let $dump = (arg: any): void => console.log(angular.mock.dump(arg));
let expect = chai.expect;
let spy = sinon.spy;

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
      expect(controller.listNames()).to.equals(elementX);
      expect(controller.readNames()).to.eql([elementX]);

      let elementY = 'y';
      controller.addName(elementY);
      expect(controller.listNames(':')).to.equals([elementX, elementY].join(':'));
      expect(controller.readNames()).to.eql([elementX, elementY]);
    });

    describe('### Async', () => {
      it('should be populated with delay - simple', $inject($timeout => {
        let elementX = 'x';
        controller.addNameAsync(elementX);

        // flush timeout(s) for all code under test.
        $timeout.flush();

        // this will throw an exception if there are any pending timeouts.
        $timeout.verifyNoPendingTasks();

        expect(controller.listNames()).to.equals(elementX);
        expect(controller.readNames()).to.eql([elementX]);
      }));

      it('should be populated with delay - complex', $inject($timeout => {
        let elementX = 'x';
        controller.addNameAsync(elementX);
        let elementY = 'y';
        controller.addNameAsync(elementY, 2000);

        $timeout.flush(501);
        expect($timeout.verifyNoPendingTasks).to.throw();

        expect(controller.listNames()).to.equals(elementX);
        expect(controller.readNames()).to.eql([elementX]);

        $timeout.flush(1500);
        $timeout.verifyNoPendingTasks();

        expect(controller.listNames(':')).to.equals([elementX, elementY].join(':'));
        expect(controller.readNames()).to.eql([elementX, elementY]);
      }));
    });
  });

  describe('## Intervals', () => {
    it('should register the intervals', $inject(($interval, $rootScope) => {
      let $intervalSpy = spy($interval);
      controller = $controller('ExampleController', { $interval: $intervalSpy, $scope: $rootScope.$new() });
      expect($intervalSpy.called).to.be.true;
      expect($intervalSpy.callCount).to.equals(2);
    }));
  });
});
