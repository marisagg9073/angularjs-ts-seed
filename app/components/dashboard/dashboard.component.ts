import ngModuleName from './dashboard.module';

'use strict';

const ngComponentName = 'tsfnDashboard';

@at.component(ngModuleName, ngComponentName, {
  templateUrl: 'dashboard/dashboard.component.html',
})
@at.inject('$log')
export default class DashboardComponent implements at.OnActivate {

  constructor(private log: angular.ILogService) {
    log.debug(['ngComponent', ngComponentName, 'loaded'].join(' '));
  }

  public $routerOnActivate(next: angular.ComponentInstruction) {
    this.log.debug(next.routeData.data);
  }
}
