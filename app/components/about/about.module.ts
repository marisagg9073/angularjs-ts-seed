import {Service} from '../../services/names-list';

'use strict';

const ngModuleName = 'app.about';

export default angular.module(ngModuleName, ['ngNewRouter', Service.NamesList.moduleName])
  .run($log => $log.debug(['ngModule', ngModuleName, 'loaded'].join (' '))).name;
