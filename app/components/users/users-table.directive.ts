import ngModuleName from './users.module';
import UsersController from './users.component';

'use strict';

const ngDirectiveName = 'tsfnUsersTable';

@at.directive(ngModuleName, ngDirectiveName, {
  restrict: 'E',
  templateUrl: 'users/users-table.directive.html'
})
export default class UsersTableDirective extends UsersController {
}
