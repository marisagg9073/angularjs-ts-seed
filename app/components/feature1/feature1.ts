import {NamesList} from '../../services/names-list';

export class Feature1Controller {

  static $inject = ['NamesList'];

  names: Array<string>;
  list: NamesList;

  constructor( list:NamesList) {
    this.list = list;
    this.names = list.get();
  }

  addName(newname) {
    this.list.add(newname);
    newname = '';
  }
}

let feature1 =   angular.module('app.feature1', [])
    .controller('Feature1Controller', Feature1Controller)
  ;

export {feature1}
