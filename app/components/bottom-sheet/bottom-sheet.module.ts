import Material from '../material/material';

'use strict';

const ngModuleName = 'app.components.bottomSheet';

export default angular.module(ngModuleName, ['ui.router', Material])
  .run(['$log', $log => $log.debug(['ngModule', ngModuleName, 'loaded'].join(' '))]).name;
