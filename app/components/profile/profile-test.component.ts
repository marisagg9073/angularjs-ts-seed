import ngModuleName from './profile.module';

'use strict';

const ngComponentName = 'tsfnProfileTest';

@at.component(ngModuleName, ngComponentName, {
  templateUrl: 'profile/profile-test.component.html'
})
@at.inject('$log')
export default class ProfileTestComponent {
  public test = true;

  constructor(private log: angular.ILogService) {
    log.debug(['ngComponent', ngComponentName, 'loaded'].join(' '));
  }
}
