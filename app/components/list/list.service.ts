import ngModuleName from './list.module';

'use strict';

export interface IUserList {
  firstName: string;
  lastName: string;
  company: string;
  address: string;
  city: string;
  state: string;
  urlImg: string;
}

const ngServiceName = 'userListService';

@at.service(ngModuleName, ngServiceName)
@at.inject('$log', '$q')
export default class UserListService {
  public userHeaders = [
    {
      name: 'FirstName',
      field: 'firstName'
    },
    {
      name: 'LastName',
      field: 'lastName'
    },
    {
      name: 'Company',
      field: 'company'
    },
    {
      name: 'City',
      field: 'city'
    },
    {
      name: 'Address',
      field: 'address'
    },
    {
      name: 'State',
      field: 'state'
    }
  ];

  public userListData: Array<IUserList> = [
    {
      firstName: 'Albert',
      lastName: 'Einstein',
      company: 'RX',
      address: 'Isola G8',
      city: 'Milan',
      state: 'Italy',
      urlImg: '/assets/images/einstein.jpg'
    },
    {
      firstName: 'Richard',
      lastName: 'Feynman',
      company: 'WBA',
      address: 'Rue Merci',
      city: 'Paris',
      state: 'France',
      urlImg: '/assets/images/feynman.jpg'
    },
    {
      firstName: 'Marisa',
      lastName: 'Guglielmo',
      company: 'WBA',
      address: 'Isola G7',
      city: 'Naples',
      state: 'Italy',
      urlImg: '/assets/images/avatar.jpg'
    }
  ];

  constructor(private log: angular.ILogService, private q: angular.IQService) {
    log.debug(['ngService', ngServiceName, 'loaded'].join(' '));
  }

  public loadAllItems() {
    return this.q.when(this.userListData);
  }

  public loadHeaders() {
    return this.q.when(this.userHeaders);
  }

  public loadDropDownList() {
    let listH: Array<String> = [];
    this.userHeaders.forEach(element => {
      listH.push(element.name);
    });
    return this.q.when(listH);
  }

  public searchItems(searchFor: string) {
    let userSearch: Array<IUserList> = [];
    this.userListData.forEach(element => {
      if (!(element.firstName.indexOf(searchFor) === -1))
        userSearch.push(element);
    });
    return this.q.when(userSearch);
  }
}
