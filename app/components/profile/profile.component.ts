import ngModuleName from './profile.module';

'use strict';

const ngComponentName = 'tsfnProfile';

@at.component(ngModuleName, ngComponentName, {
  templateUrl: 'profile/profile.component.html',
})
@at.inject('$log')
export default class ProfileComponent {

  public user = {
    title: 'Admin',
    email: 'contact@flatlogic.com',
    urlImg: '/assets/images/avatar.jpg',
    firstName: '',
    lastName: '',
    company: 'FlatLogic Inc.',
    address: 'Fabritsiusa str, 4',
    city: 'Minsk',
    gender: ['M', 'F'],
    interests: ['music', 'sport', ' books'],
    state: '',
    biography: ['We are young and ambitious full service design and technology company.',
      'Our focus is JavaScript development and User Interface design.'].join(' '),
    postalCode: '220007'
  };

  constructor(private log: angular.ILogService) {
    log.debug(['ngComponent', ngComponentName, 'loaded'].join(' '));
  }

}
