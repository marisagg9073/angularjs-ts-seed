import {Service} from '../../services/names-list';


export module About {
    
    export const moduleName = "app.about";
    

    @at.controller( moduleName, 'AboutController')
    @at.inject( '$router', Service.NamesList.name)
    class AboutController {
    names: Array<string>;

    constructor( private router:any, private list:Service.NamesList) {

        console.log( "router", router );
        this.names = list.get();
    }

    addName(newname) {
        this.list.add(newname);
        newname = '';
    }
    }
    
}



