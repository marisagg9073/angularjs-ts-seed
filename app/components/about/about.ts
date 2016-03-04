import {NamesList} from '../../services/names-list';


export module About {
    
    export const moduleName = "app.about";
    

    @at.controller( moduleName, 'AboutController')
    @at.inject( '$router','NamesList')
    class AboutController {
    names: Array<string>;

    constructor( private router:any, private list:NamesList) {

        console.log( "router", router );
        this.list = list;
        this.names = list.get();
    }

    addName(newname) {
        this.list.add(newname);
        newname = '';
    }
    }
    
}



