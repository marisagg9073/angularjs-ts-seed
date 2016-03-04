/// <reference path="../../typings/browser.d.ts" />

import {Service} from './names-list';

let module = angular.mock.module;
let inject = angular.mock.inject;

describe('# Names List Service', () => {
  let namesList;

  beforeEach(() => {
    module('app');

    inject(_NamesList_ => {
      namesList = _NamesList_;
    });
  });

  it('should be an instance of NameList', () => {
    expect(namesList).to.be.an.instanceof(Service.NamesList);
  });
  it('should have a property names', () => {
    expect(namesList).to.have.property('names');
  });
  it('should add() a name', () => {
    let lastValue;
    namesList.add('test');
    lastValue = namesList.names.pop();
    expect(lastValue).to.equal('test');
  });
});