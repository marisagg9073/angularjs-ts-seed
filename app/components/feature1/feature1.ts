import {NamesList} from '../../services/names-list';

export class Feature1Controller {

  static $inject = ['NamesList'];

  names: Array<string>;
  list: NamesList;

  constructor(list) {
    this.list = list;
    this.names = list.get();
  }

  addName(newname) {
    this.list.add(newname);
    newname = '';
  }
}
