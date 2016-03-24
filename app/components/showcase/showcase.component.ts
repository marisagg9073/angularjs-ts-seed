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
@at.inject('showcase', '$log', '$q')
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
    private q: angular.IQService) {
    log.debug(['ngComponent', ngComponentName, 'loaded'].join(' '));
  }

  public $onInit() {
    if (!this.lazy)
      this.load();
  }

  public toggleSource() {
    this.load().then(loaded => loaded ? this.toggleSourceInternal() : this.q.reject());
  }

  private toggleSourceInternal() {
    this.showSource = !this.showSource;
  }

  private load() {
    if (!this.loaded) {
      // this.fileList.push('components/showcase/showcase.scss');
      return this.showcase.load(this.fileList).then(files => {
        for (let path in files) {
          this.tabs.push(this.fileToTab(path, files[path]));
        }
      }).then(() => this.loaded = true);
    } else
      return this.q.when(true);
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
