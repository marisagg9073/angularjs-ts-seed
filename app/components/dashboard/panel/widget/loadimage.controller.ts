import ngModuleName from './widget.module';

'use strict';

const ngControllerName = 'LoadimageController';

@at.controller(ngModuleName, ngControllerName)
@at.inject('$log', '$mdDialog', '$mdToast')
export default class LoadimageController {

  public imgSrc: string;
  public dialogTpl: string;

  constructor(private log: angular.ILogService, private mdDialog: angular.material.IDialogService,
    private mdToast: angular.material.IToastService) {
    log.debug(['ngController', ngControllerName, 'loaded'].join(' '));
    this.imgSrc = '/assets/images/avatar.jpg';
    this.dialogTpl = 'dashboard/panel/widget/loadimagedialog.tpl.html';
  }

  public zoom() {
    this.mdDialog.show({
      templateUrl: this.dialogTpl,
      clickOutsideToClose: true
    });
  };
  public showSimpleToast(title: string) {
    this.mdToast.show(
      this.mdToast.simple()
        .textContent('avatar.jpg')
        .hideDelay(2000)
        .position('bottom right')
    );
  };
}
