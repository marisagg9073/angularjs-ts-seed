/// <reference path="../../../typings/browser.d.ts" />

import {Feature1} from './feature1';

let module = angular.mock.module;
let inject = angular.mock.inject;
let expect = chai.expect;

describe('# About Controller', () => {
    let $controller, $scope, controller;

    beforeEach(() => {
        module('app');

        inject(_$controller_ => {
            $controller = _$controller_;
        });

        controller = $controller('Feature1Controller', { $scope: {} });
    });

    it('should be an instance of Feature1Controller', () => {
        expect(controller).to.be.an.instanceof(Feature1.Feature1Controller);
    });
    it('should have propertis list, names', () => {
        expect(controller).to.have.property('names');
        expect(controller).to.have.property('list');
    });
    it('should add() a name and update the names list', () => {
        let lastValue;
        controller.addName('test');
        lastValue = controller.names.pop();
        expect(lastValue).to.equal('test');
    })
});