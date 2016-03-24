import ngModuleName from './dashboard.module';

'use strict';

const ngComponentName = 'tsfnDashboard';

@at.component(ngModuleName, ngComponentName, {
  templateUrl: 'dashboard/dashboard.component.html',
})
@at.inject('$log')
export default class DashboardComponent implements at.OnActivate {
  public title: string;

  public files = [
    'components/dashboard/dashboard.component.html',
    'components/dashboard/dashboard.component.ts',
    'components/dashboard/dashboard.module.ts'
  ];

  constructor(private log: angular.ILogService) {
    log.debug(['ngComponent', ngComponentName, 'loaded'].join(' '));
  }

  public $routerOnActivate(next: at.ComponentInstruction) {
    this.title = next.routeData.data['title'];
  }
}
