import {at} from '../../at-angular';

export module Home {

    export const moduleName = "app.home";

    @at.controller(moduleName, 'HomeController')
    @at.inject('$router')
    export class HomeController {


        constructor(private router: any) {
            console.log("childRouter", router);
        }

    }

}


