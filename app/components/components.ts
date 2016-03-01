import {feature1}   from './feature1/feature1';
import {home}       from './home/home';
import {about}      from './about/about';


let components = angular.module('app.components',[
    home.name,
    feature1.name,
    about.name
  ]);
;

export {components}
