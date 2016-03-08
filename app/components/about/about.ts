import {at} from '../../at-angular';
import {Service} from '../../services/names-list';


export module About {

    export const moduleName = "app.about";

    export let mod = angular.module(moduleName, ['ngNewRouter', Service.NamesList.moduleName]);

    @at.controller(moduleName, 'AboutController')
    @at.inject('$router', Service.NamesList.myName)
    export class AboutController {
        names: Array<string>;

        constructor(private router: any, private list: Service.NamesList) {

            console.log("router", router);
            this.names = list.get();
        }

        addName(newname) {
            this.list.add(newname);
            newname = '';
        }
    }

}



