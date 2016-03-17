import app from './app';

app.requires.push('tpl');

angular.element(document)
  .ready(() => angular.bootstrap(document.body, [app.name]));
