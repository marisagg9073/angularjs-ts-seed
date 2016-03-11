import ngModuleName from './example.module';

'use strict';

const ngControllerName = 'ExampleController';

@at.controller(ngModuleName, ngControllerName)
@at.inject('$log', '$router')
export default class ExampleController {
  private names: Array<string> = [];

  constructor(private log: angular.ILogService, private router: any) {
    log.debug(['ngController', ngControllerName, 'loaded'].join(' '));
  }

  public addName(newname) {
    this.names.push(newname);
  }

  public readNames = () => angular.copy(this.names);

  public listNames = (glue: string = ','): string => this.names.join(glue);
}
