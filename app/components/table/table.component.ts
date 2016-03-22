import ngModuleName from './table.module';

import TableService from './table.service';

'use strict';

const ngComponentName = 'tsfnTable';

@at.component(ngModuleName, ngComponentName, {
  templateUrl: 'table/table.component.html',
})
@at.inject('tableService', '$log')
export default class TableComponent implements at.IComponent {

  public tableData = [];

  constructor(private tableService: TableService,
    private log: angular.ILogService) {
    log.debug(['ngComponent', ngComponentName, 'loaded'].join(' '));

    tableService.loadAllItems()
      .then(data => this.tableData = [].concat(data));
  }

  public $onInit() {
    this.tableService.loadAllItems()
      .then(data => this.tableData = [].concat(data));
  }
}
