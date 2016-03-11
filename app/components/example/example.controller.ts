import ngModuleName from './example.module';

'use strict';

const ngControllerName = 'ExampleController';

@at.controller(ngModuleName, ngControllerName)
@at.inject('$interval', '$log', '$scope', '$timeout', '$router')
export default class ExampleController {
  private names: Array<string> = [];

  private int1: number = Math.random();
  private int2: number = Math.random();

  private incrementInterval = this.interval(this.increment1, 1000);
  private incrementIntervalTenTimes = this.interval(this.increment2, 1000, 10);

  constructor(private interval: angular.IIntervalService,
    private log: angular.ILogService,
    private scope: angular.IScope,
    private timeout: angular.ITimeoutService,
    private router: any) {
    log.debug(['ngController', ngControllerName, 'loaded'].join(' '));

    // Note: we should always have this code in place, to ensure we don't leak intervals.
    // Ensure that we always close any running intervals when a controller instance is un-loaded.
    // scope.$on('$destroy', () => this.cancelIntervals());
  }

  public addName(newName: string) {
    this.names.push(newName);
  }

  public addNameAsync(newName: string, delay: number = 500) {
    this.timeout(() => this.addName(newName), delay);
  }

  public readNames = () => angular.copy(this.names);

  public listNames = (glue: string = ','): string => this.names.join(glue);

  public cancelIntervals = () => {
    if (angular.isDefined(this.incrementInterval) || angular.isDefined(this.incrementIntervalTenTimes)) {
      this.interval.cancel(this.incrementInterval);
      this.interval.cancel(this.incrementIntervalTenTimes);
      this.incrementInterval = undefined;
      this.incrementIntervalTenTimes = undefined;
    }
  };

  private increment1 = () => this.int1 += 1;

  private increment2 = () => this.int2 += 1;
}
