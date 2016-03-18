import ngModuleName from './main.module';
import MainController from './main.controller';

'use strict';

const ngDirectiveName = 'tsfnMainToolbar';

@at.directive(ngModuleName, ngDirectiveName, {
  restrict: 'E',
  templateUrl: 'main/main-toolbar.directive.html'
})
export default class MainToolbarDirective extends MainController {
}
