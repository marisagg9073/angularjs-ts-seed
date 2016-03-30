import ngModuleName from './profile.module';

'use strict';

const ngDirectiveName = 'tsfnValidationSync';

@at.directive(ngModuleName, ngDirectiveName, {
  restrict: 'A',
  require: 'ngModel',
  scope: {},
  link: (scope, elm, attrs, ctrl) => {

    let expr = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    ctrl['$validators'].mailerror = (modelValue, viewValue) => {

      if (ctrl['$isEmpty'](modelValue)) {
        // consider empty model valid
        return true;
      }

      if (expr.test(viewValue)) {
        // mail is valid
        return true;
      }
      // if mail is invalid
      return false;
    };
  }
})
@at.inject('$log')
export default class ValidationSyncDirective {
  constructor(private log: angular.ILogService) {
    log.debug(['ngDirectiveName', ngDirectiveName, 'loaded'].join(' '));
  }
}
