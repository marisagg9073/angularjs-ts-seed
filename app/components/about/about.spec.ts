/// <reference path="../../../typings/browser.d.ts" />

import {About} from './about';
import {Service} from '../../services/names-list';

let module = angular.mock.module;
let inject = angular.mock.inject;
let expect = chai.expect;

describe('# About Controller', () => {
    let $controller, controller;

    beforeEach(() => {
        // angular.module('ngNewRouter', []);
        // angular.module(Service.NamesList.moduleName);
        module(About.moduleName);

        inject(_$controller_ => {
            $controller = _$controller_;
        });

        controller = $controller('AboutController', { $scope: {} });
    });

    it('should be an instance of AboutController', () => {
        expect(controller).to.be.an.instanceof(About.AboutController);
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