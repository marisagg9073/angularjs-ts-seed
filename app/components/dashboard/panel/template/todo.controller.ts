import ngModuleName from '../panel.module';

import {ITodo} from './todo.model';
import TodoService from './todo.service';

'use strict';

const ngControllerName = 'TodoController';

@at.controller(ngModuleName, ngControllerName)
@at.inject('todoService', '$log')
export default class TodoController {

  public todos: Array<ITodo> = [];
  public todoText: string;

  constructor(private todoService: TodoService,
    private log: angular.ILogService) {
    log.debug(['ngController', ngControllerName, 'loaded'].join(' '));

    todoService.loadAllItems().then(todos => this.todos = [].concat(todos));
  }

  public addTodo() {
    if (this.todoText && this.todoText.length > 0)
      this.todos.push({ text: this.todoText, done: false });
    this.todoText = '';
  }

}
