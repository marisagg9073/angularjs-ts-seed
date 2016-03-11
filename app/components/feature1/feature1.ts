import {Service} from '../../services/names-list';

export module Feature1 {

  'use strict';

  export const moduleName = 'app.feature1';

  export let ngModule = angular.module(moduleName, [Service.NamesList.moduleName]);

  @at.controller(moduleName, 'Feature1Controller')
  @at.inject(Service.NamesList.myName)
  export class Feature1Controller {

    private names: Array<string>;

    constructor(private list: Service.NamesList) {
      this.names = list.get();
    }

    public addName(newname) {
      this.list.add(newname);
      newname = '';
    }

  }

  @at.component(moduleName, 'featureTest')
  export class Feature1Component {

    // public static transclude = true;
    // public static templateUrl = "components/feature1/feature-test.html";

    // And the rest are simple Ctrl instance members
    public name: string;

    public static template: angular.IComponentTemplateFn = () => {
      return '<span>{{ $ctrl.name }}</span>';
    };

    constructor() {
      console.log('constructor');
      this.name = 'FirstTestCtrl';
    }

    public $onInit(): void {
      console.log('onInit');
    }

  }

}
