'use strict';

const ngModuleName = 'app.components.material';

export default angular.module(ngModuleName, ['ngNewRouter', 'ngMaterial'])
  .run(['$log', $log => $log.debug(['ngModule', ngModuleName, 'loaded'].join(' '))]).name;
