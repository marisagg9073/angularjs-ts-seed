const ngModuleName = 'app.<%= name %>';

export default angular.module(ngModuleName, ['ngNewRouter'])
  .run(['$log', $log => $log.debug(['ngModule', ngModuleName, 'loaded'].join(' '))]).name;
