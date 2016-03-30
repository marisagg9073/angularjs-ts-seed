import Common    from './common/common';
import Example   from './example/example';
import Material  from './material/material';
import Main      from './main/main';
import Dashboard from './dashboard/dashboard';
<<<<<<< HEAD
import Message from './message/message';
import Profile from './profile/profile';
import Table from './table/table';
import Users from './users/users';
=======
import Message   from './message/message';
import Profile   from './profile/profile';
import Showcase  from './showcase/showcase';
import Table     from './table/table';
>>>>>>> 9a2fa9a43f161adb7d115bb54387fa5b4dde92e7

let components = angular.module('app.components', [
  Common,
  Material,
  Main,
  Dashboard,
  Message,
  Profile,
  Showcase,
  Table,
  Users,

  Example
]);

export {components}
