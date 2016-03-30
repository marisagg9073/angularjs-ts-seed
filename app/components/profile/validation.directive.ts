import ngModuleName from './profile.module';

'use strict';

const ngDirectiveName = 'tsfnValidation';

@at.directive(ngModuleName, ngDirectiveName, {
  restrict: 'A',
  require: 'ngModel',
  scope: {},
  link: (scope, elm, attrs, ctrl) => {
    var usernames = ['Jim', 'John', 'Jill', 'Jackie'];

    ctrl['$asyncValidators'].titlerror = (modelValue, viewValue) => {

      if (ctrl['$isEmpty'](modelValue)) {
        // consider empty model valid
        return scope['vm'].q.when();
      }

      var def = scope['vm'].q.defer();

      scope['vm'].timeout(() => {
        // Mock a delayed response
        if (usernames.indexOf(modelValue) === -1) {
          def.resolve();
        } else {
          def.reject();
        }
      }, 1000);

      return def.promise;
    };
  }
})
@at.inject('$log', '$q', '$timeout')
export default class ValidationDirective {
  constructor(private log: angular.ILogService, private q: angular.IQService, private timeout: angular.ITimeoutService) {
    log.debug(['ngDirectiveName', ngDirectiveName, 'loaded'].join(' '));
  }
}
