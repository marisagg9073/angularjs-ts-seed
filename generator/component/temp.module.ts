const ngModuleName = 'app.<%= name %>';

export default angular.module(ngModuleName, ['ngNewRouter'])
  .run($log => $log.debug(['ngModule', ngModuleName, 'loaded'])).name;
