
export module Home {

  'use strict';

  export const moduleName = 'app.home';

  export let ngModule = angular.module(moduleName, ['ngNewRouter']);

  @at.controller(moduleName, 'HomeController')
  @at.inject('$router')
  export class HomeController {

    constructor(private router: any) {
      console.log('childRouter', router);
    }

  }

}
