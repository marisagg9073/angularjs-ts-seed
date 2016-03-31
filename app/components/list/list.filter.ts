import ngModuleName from './list.module';

'use strict';

const ngFilterName = 'listfilt';

@at.filter(ngModuleName, ngFilterName)
@at.inject('$log')
export default class Listfilt implements at.IFilter {

  constructor(private log: angular.ILogService) {
    log.debug(['ngFilter', ngFilterName, 'loaded'].join(' '));
  }

  public transform = (input: string): string => {
    return input.toUpperCase();
  };
}
