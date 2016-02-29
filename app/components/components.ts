import {Feature1Controller} from './feature1/feature1';
import {HomeController} from './home/home';
import {AboutController} from './about/about';

let components = angular.module('app.components', [])
  .controller('AboutController', AboutController)
  .controller('Feature1Controller', Feature1Controller)
  .controller('HomeController', HomeController)
;


export {components}
