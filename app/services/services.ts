import {NamesList} from './names-list';

@at.service( 'app.services', "NamesService")
export class NamesService {
    
    
}
let services = angular.module('app.services', [])
  .service('NamesList', NamesList);

export {services}