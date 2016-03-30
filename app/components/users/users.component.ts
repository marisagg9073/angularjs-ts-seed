import ngModuleName from './users.module';
import {IUser} from './users.service';
import UsersService from './users.service';

'use strict';

const ngComponentName = 'tsfnUsers';

@at.component(ngModuleName, ngComponentName, {
  templateUrl: 'users/users.component.html',
})
@at.inject('$log', '$q', 'usersService')
export default class UsersComponent implements at.OnInit {

  public usersData: Array<IUser> = [];
  public searchData: Array<IUser> = [];
  public searchText: string;
  public searchFor: Array<String> = [ 'FirstName' , 'LastName' , 'Company' , 'City' , 'State' ];

  constructor(private log: angular.ILogService, private q: angular.IQService, private usersService: UsersService) {
    log.debug(['ngComponent', ngComponentName, 'loaded'].join(' '));
  }

  public $onInit() {
    this.usersService.loadAllItems()
      .then(data => this.usersData = [].concat(data));
  }
  public searchUser(searchText){
     this.usersService.searchItems(searchText)
      .then(data => this.searchData = [].concat(data));
  }
}
