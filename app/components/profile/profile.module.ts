import Material from '../material/material';
import Showcase from '../showcase/showcase';

'use strict';

const ngModuleName = 'app.components.profile';

<<<<<<< HEAD
export default angular.module(ngModuleName, ['ngComponentRouter', 'ngMessages', Material])
=======
export default angular.module(ngModuleName, ['ngComponentRouter', Material, Showcase])
>>>>>>> 9a2fa9a43f161adb7d115bb54387fa5b4dde92e7
  .run(['$log', $log => $log.debug(['ngModule', ngModuleName, 'loaded'].join(' '))]).name;
