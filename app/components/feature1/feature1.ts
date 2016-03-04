import {NamesList} from '../../services/names-list';

export module Feature1 {

    export const moduleName = 'app.feature1';

    @at.controller( moduleName, 'Feature1Controller')
    @at.inject( 'NamesList')
    class Feature1Controller {

    names: Array<string>;
    
    constructor( private list:NamesList) {
        this.list = list;
        this.names = list.get();
    }

    addName(newname) {
        this.list.add(newname);
        newname = '';
    }
    }
    
}



