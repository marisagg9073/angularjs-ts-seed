import ngModuleName from './main.module';

'use strict';

const ngComponentName = 'tsfnMainLeftSidenav';

@at.component(ngModuleName, ngComponentName, {
  templateUrl: 'main/main-left-sidenav.component.html'
})
@at.inject('$log')
export default class App {
  constructor(private log: angular.ILogService) {
    log.debug(['ngComponent', ngComponentName, 'loaded'].join(' '));
  }
}
