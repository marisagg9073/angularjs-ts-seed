/// <reference path="../typings/custom.system.d.ts" />

System.config({
  paths: { '*': '*.js?v=<%= VERSION %>' }
});

System.import('./app').then(System.import('./partials'))
  .catch(console.error.bind(console));
