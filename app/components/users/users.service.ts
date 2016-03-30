import ngModuleName from './users.module';

'use strict';

export interface IUser {
  title: string;
  email: string;
  urlImg: string;
  firstName: string;
  lastName: string;
  company: string;
  address: string;
  city: string;
  state: string;
  biography: string;
  postalCode: string;
}

const ngServiceName = 'usersService';

@at.service(ngModuleName, ngServiceName)
@at.inject('$log', '$q')
export default class UsersService {

  public usersData: Array<IUser> = [
    {
      title: 'MR',
      email: 'einstein@gmail.com',
      urlImg: '/assets/images/einstein.jpg',
      firstName: 'Albert',
      lastName: 'Einstein',
      company: 'WBA',
      address: 'Isola G7',
      city: 'Naples',
      state: 'Italy',
      biography: 'A famous Phisician',
      postalCode: '80100'
    },
    {
      title: 'MR',
      email: 'feynman@gmail.com',
      urlImg: '/assets/images/feynman.jpg',
      firstName: 'Richard',
      lastName: 'Feynman',
      company: 'WBA',
      address: 'Isola G7',
      city: 'Naples',
      state: 'Italy',
      biography: ['American theoretical physicist known for ',
        'his work in the path integral formulation',
        ' of quantum mechanics'].join(' '),
      postalCode: '80100'
    },
    {
      title: 'MSS',
      email: 'mguglielmo@gmail.com',
      urlImg: '/assets/images/avatar.jpg',
      firstName: 'Marisa',
      lastName: 'Guglielmo',
      company: 'WBA',
      address: 'Isola G7',
      city: 'Naples',
      state: 'Italy',
      biography: 'A young italian programmer',
      postalCode: '80100'
    }
  ];

  constructor(private log: angular.ILogService, private q: angular.IQService) {
    log.debug(['ngService', ngServiceName, 'loaded'].join(' '));
  }

  public loadAllItems() {
    return this.q.when(this.usersData);
  }

  public searchItems(searchFor: string){
    return this.q.when();
  }
}
