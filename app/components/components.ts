import Common       from './common/common';
import {Feature1}   from './feature1/feature1';
import {Home}       from './home/home';
import About        from './about/about';

let components = angular.module('app.components', [
  Common,
  Home.moduleName,
  Feature1.moduleName,
  About
]);

export {components}
