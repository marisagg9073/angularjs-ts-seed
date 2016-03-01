import {NamesList} from '../../services/names-list';

export class AboutController {
  static $inject = ['$router', 'NamesList'];
  names: Array<string>;
  list: NamesList;

  constructor( router:any, list:NamesList) {

    console.log( "router", router );
    this.list = list;
    this.names = list.get();
  }

  addName(newname) {
    this.list.add(newname);
    newname = '';
  }
}



let about = angular.module('app.about', [])
  .controller('AboutController', AboutController)
;

export {about}
