import ngModuleName from './list.module';
import ListController from './list.component';

'use strict';

const ngDirectiveName = 'tsfnUsersList';

@at.directive(ngModuleName, ngDirectiveName, {
  restrict: 'E',
  templateUrl: 'list/list.directive.html'
})
export default class UsersListDirective extends ListController {
}
