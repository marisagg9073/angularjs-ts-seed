import ngModuleName from './<%= name %>.module';

'use strict';

@at.controller(ngModuleName, '<%= upCaseName %>Controller')
@at.inject('$router')
export default class <%= upCaseName %>Controller {
  private myName: string;

  constructor(private router: any) {
    console.log('router', router);
    this.myName = '<%= name %>';
  }

}
