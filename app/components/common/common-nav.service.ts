import ngModuleName from './common.module';

'use strict';

const ngServiceName = 'navService';

export interface IMenuItem {
  name: string;
  icon: string;
  sref: string;
}

@at.service(ngModuleName, ngServiceName)
@at.inject('$log', '$q')
export default class NavService {
  private menuItems: Array<IMenuItem> = [
    {
      name: 'Dashboard',
      icon: 'dashboard',
      sref: '.dashboard'
    },
    {
      name: 'Profile',
      icon: 'person',
      sref: '.profile'
    },
    {
      name: 'Table',
      icon: 'view_module',
      sref: '.table'
    }
  ];

  constructor(private log: angular.ILogService, private q: angular.IQService) {
    log.debug(['ngService', ngServiceName, 'loaded'].join(' '));
  }

  public loadAllItems() {
    return this.q.when(this.menuItems);
  }

}
