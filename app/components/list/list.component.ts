import ngModuleName from './list.module';
import {IUserList} from './list.service';
import UserListService from './list.service';

'use strict';

const ngComponentName = 'tsfnList';

@at.component(ngModuleName, ngComponentName, {
  templateUrl: 'list/list.component.html',
  $routeConfig: [
    {path: '/', name: 'List', component: ngComponentName },
  {path: '/details', name: 'Details', component: ngComponentName }
   ]
})
@at.inject('$log', '$q', 'userListService')
export default class ListComponent implements at.OnInit {

  public listData: Array<IUserList> = [];
  public searchData: Array<IUserList> = [];
  public headers: Array<String> = [];
  public dropList: Array<String> = [];
  public searchText: string;
  public dropField: String = '';

  constructor(private log: angular.ILogService, private q: angular.IQService, private userListService: UserListService) {
    log.debug(['ngComponent', ngComponentName, 'loaded'].join(' '));
  }

  public $onInit() {
    this.userListService.loadDropDownList().then(data => this.dropList = [].concat(data));
    this.userListService.loadHeaders().then(data => this.headers = [].concat(data));
    this.userListService.loadAllItems()
      .then(data => this.listData = [].concat(data));
  }
  public searchUser(searchText){
     this.userListService.searchItems(searchText)
      .then(data => this.searchData = [].concat(data));
  }

}
