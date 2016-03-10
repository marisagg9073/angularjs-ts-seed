import {at} from '../../at-angular';
import {Service} from '../../services/names-list';

import {Definition} from './about';

'use strict';

@at.controller(Definition.ngModuleName, 'AboutController')
@at.inject('$router', Service.NamesList.myName)
export default class AboutController {
  private names: Array<string>;

  constructor(private router: any, private list: Service.NamesList) {
    console.log('router', router);
    this.names = list.get();
  }

  public addName(newname) {
    this.list.add(newname);
    newname = '';
  }
}
