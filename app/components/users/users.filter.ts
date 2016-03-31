import ngModuleName from './users.module';

'use strict';

const ngFilterName = 'userfilt';

@at.filter(ngModuleName, ngFilterName)
@at.inject('$log')
export default class Userfilt implements at.IFilter {

  constructor(private log: angular.ILogService) {
    log.debug(['ngFilter', ngFilterName, 'loaded'].join(' '));
  }

  public transform = (input: string): string => {
    return input.toUpperCase();
  };
}
