
export class HomeController {
  static $inject = ['$router'];

  constructor(private router:any ) {
    console.log("childRouter", router);
    /*
    router.config( [
      { path: '/', component: 'home' }
    ]);
    */

  }

}

let home = angular.module('app.home', ['ngNewRouter'])
  .controller('HomeController', ['$router', HomeController])
;

export {home}
