/// <reference path="../../../typings/browser.d.ts" />

import Example from './example';
import ExampleController from './example.controller';

'use strict';

let $module = angular.mock.module;
let $inject = angular.mock.inject;
let $dump = (arg: any): void => console.log(angular.mock.dump(arg));

describe('# Example Controller', () => {
  let $controller, $log, $rootScope;
  let controller: ExampleController;

  beforeEach(() => {
    $module(Example);

    $inject((_$controller_, _$log_, _$rootScope_) => {
      $controller = _$controller_;
      $log = _$log_;
      $rootScope = _$rootScope_;
    });

    controller = $controller('ExampleController', { $scope: $rootScope.$new() });
  });

  describe('## Existence', () => {
    it('should exist', () => {
      expect(controller).not.toBeUndefined();
      expect(controller).not.toBeNull();
    });

    it('should be an instance of ExampleController', () => {
      expect(controller).toEqual(jasmine.any(ExampleController));
    });
  });

  describe('## Log enabled', () => {
    it('should log registration', () => {
      let loaded = ['ngController', 'ExampleController', 'loaded'].join(' ');
      expect($log.debug.logs[1]).toContain(loaded);
    });
  });

  describe('## Names property', () => {
    it('should be empty', () => {
      expect(controller.listNames()).toBeEmptyString();
      expect(controller.readNames()).toBeEmptyArray();
    });

    it('should be populated', () => {
      let elementX = 'x';
      controller.addName(elementX);
      expect(controller.listNames()).toEqual(elementX);
      expect(controller.readNames()).toEqual([elementX]);

      let elementY = 'y';
      controller.addName(elementY);
      expect(controller.listNames(':')).toEqual([elementX, elementY].join(':'));
      expect(controller.readNames()).toEqual([elementX, elementY]);
    });

    describe('### Async', () => {
      it('should be populated with delay - simple', $inject($timeout => {
        let elementX = 'x';
        controller.addNameAsync(elementX);

        // flush timeout(s) for all code under test.
        $timeout.flush();

        // this will throw an exception if there are any pending timeouts.
        $timeout.verifyNoPendingTasks();

        expect(controller.listNames()).toEqual(elementX);
        expect(controller.readNames()).toEqual([elementX]);
      }));

      it('should be populated with delay - complex', $inject($timeout => {
        let elementX = 'x';
        controller.addNameAsync(elementX);
        let elementY = 'y';
        controller.addNameAsync(elementY, 2000);

        $timeout.flush(501);
        expect($timeout.verifyNoPendingTasks).toThrow();

        expect(controller.listNames()).toEqual(elementX);
        expect(controller.readNames()).toEqual([elementX]);

        $timeout.flush(1500);
        $timeout.verifyNoPendingTasks();

        expect(controller.listNames(':')).toEqual([elementX, elementY].join(':'));
        expect(controller.readNames()).toEqual([elementX, elementY]);
      }));
    });
  });

  describe('## Intervals', () => {
    let $intervalSpy;

    beforeEach($inject(_$interval_ => {
      $intervalSpy = jasmine.createSpy('$interval', _$interval_).and.callThrough();
      controller = $controller('ExampleController', { $interval: $intervalSpy, $scope: $rootScope.$new() });
    }));

    it('should register the intervals', $inject($interval => {
      expect($intervalSpy).toHaveBeenCalled();
      expect($intervalSpy.calls.count()).toBe(2);

      expect($intervalSpy).toHaveBeenCalledWith(controller.increment1, 1000);
      expect($intervalSpy).toHaveBeenCalledWith(controller.increment2, 1000, 10);
    }));

    it('should cancel the intervals', () => {
      spyOn($intervalSpy, 'cancel');

      // execute the cancel method
      controller.cancelIntervals();

      expect($intervalSpy.cancel.calls.count()).toBe(2);

      // Assert that cancel is called with the correct interval instances
      expect($intervalSpy.cancel.calls.argsFor(0)[0].$$intervalId).toBe(2);
      expect($intervalSpy.cancel.calls.argsFor(1)[0].$$intervalId).toBe(3);
    });

    it('should cancel the intervals on destroy', () => {
      spyOn(controller, 'cancelIntervals');

      controller.destroy();
      expect(controller.cancelIntervals).toHaveBeenCalled();
    });

    it('should not cancel the already cancelled intervals on destroy', () => {
      spyOn($intervalSpy, 'cancel');

      controller.cancelIntervals();
      controller.destroy();
      expect($intervalSpy.cancel.calls.count()).toBe(2);
    });
  });
});
