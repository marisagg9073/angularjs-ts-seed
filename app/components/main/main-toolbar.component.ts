import ngModuleName from './main.module';

'use strict';

const ngComponentName = 'tsfnMainToolbar';

@at.component(ngModuleName, ngComponentName, {
  templateUrl: 'main/main-toolbar.component.html'
})
@at.inject('$log')
export default class App {
  constructor(private log: angular.ILogService) {
    log.debug(['ngComponent', ngComponentName, 'loaded'].join(' '));
  }
}
