import ngModuleName from './showcase.module';

import ShowcaseService from './showcase.provider';

'use strict';

interface ITab {
  title: string;
  options: any;
  content: string;
}

const ngComponentName = 'tsfnShowcase';

@at.component(ngModuleName, ngComponentName, {
  bindings: {
    fileList: '<',
    lazy: '<',
    title: '@'
  },
  templateUrl: 'showcase/showcase.component.html'
})
@at.inject('showcase', '$log', '$q', '$timeout', '$mdDialog')
export default class ShowcaseComponent implements at.OnInit {
  public fileList: string[];
  public lazy: boolean;

  public showSource = false;
  public selected = 0;
  public tabs: ITab[] = [];

  public loaded = false;

  private modes = {
    html: 'htmlmixed',
    js: 'javascript',
    json: { name: 'javascript', json: true },
    scss: 'sass',
    ts: { name: 'javascript', typescript: true }
  };

  constructor(private showcase: ShowcaseService,
    private log: angular.ILogService,
    private q: angular.IQService,
    private timeout: angular.ITimeoutService,
    private mdDialog: angular.material.IDialogService) {
    log.debug(['ngComponent', ngComponentName, 'loaded'].join(' '));
  }

  public $onInit() {
    if (!this.lazy)
      this.load();
  }

  public toggleSource($event) {
    this.load($event).then(loaded => loaded ? this.toggleSourceInternal() : this.q.reject());
  }

  private toggleSourceInternal() {
    this.showSource = !this.showSource;
  }

  private load($event?: PointerEvent) {
    if (!this.loaded) {
      // this.fileList.push('components/showcase/showcase.scss');
      this.showLoadingAlert($event);
      return this.showcase.load(this.fileList)
        .then(files => this.tabs = this.fileList.map(path => this.fileToTab(path, files[path])))
        .then(() => this.loaded = true)
        .then(() => this.hideLoadingAlert());
    } else
      return this.q.when(true);
  }

  private showLoadingAlert($event: PointerEvent) {
    let alert = this.mdDialog.alert()
      .title('Loading')
      .textContent('Fecthing source code files...')
      .ok('Ok')
      .targetEvent($event);
    this.mdDialog
      .show(alert)
      .finally(() => {
        alert = undefined;
      });
  }

  private hideLoadingAlert() {
    let deferred = this.q.defer();
    let delay = 200 + 15 * this.fileList.length;
    this.timeout(() => deferred.resolve(this.mdDialog.hide(true)), delay);
    return deferred.promise;
  }

  private fileToTab(path: string, content: string): ITab {
    let parts = path.split('/');
    let name = parts[parts.length - 1];

    parts = name.split('.');
    let ext = parts[parts.length - 1];

    let options = {
      mode: this.modes[ext] || ext,
      theme: 'material',
      lineNumbers: true,
      readOnly: true,
      autoRefresh: true
    };

    // this.log.debug(name, options);

    return {
      title: name,
      options: options,
      content: content
    };
  }
}
