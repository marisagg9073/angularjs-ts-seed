import {at} from '../../at-angular';

import {Definition} from './<%= name %>';

'use strict';

@at.controller(Definition.ngModuleName, '<%= upCaseName %>Controller')
@at.inject('$router')
export default class <%= upCaseName %>Controller {
  private myName: string;

  constructor(private router: any) {
    console.log('router', router);
    this.myName = '<%= name %>';
  }

}
