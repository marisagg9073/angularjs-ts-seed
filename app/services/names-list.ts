import {at} from '../at-angular';

export module Service {

    @at.service(NamesList.moduleName, NamesList.myName)
    export class NamesList {
        public static get moduleName() { return "app.services"; }
        public static get myName() { return "NamesList"; }

        names: Array<string>;
        constructor() {
            this.names = ['Dijkstra', 'Knuth', 'Turing', 'Hopper'];
        }
        get() {
            return this.names;
        }
        add(value) {
            this.names.push(value);
        }
    }

}
