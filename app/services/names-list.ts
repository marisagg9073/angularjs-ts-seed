
export module Service {

    @at.service( NamesList.moduleName , NamesList.name)
    export class NamesList {
        public static get moduleName() { return  "app.services"; }
        public static get name() { return  "NamesList"; }
        
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