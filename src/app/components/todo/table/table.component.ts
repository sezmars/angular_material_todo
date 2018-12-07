import {Component, Input} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {TodoMockService} from '../service';
import {TodoBase} from '../../../models/Todo';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() public todos = [];
  @Input() public today = [];

  constructor(private listMockService: TodoMockService) {
  }

  public drop(event: CdkDragDrop<any[]>) {
    if (event.container.id === 'cdk-drop-list-1') {
      this.listMockService.updateTodo(event.previousContainer.data[event.previousIndex]);
    } else {
      event.previousContainer.data[event.previousIndex].complete = false;
      this.listMockService.deleteTodayTodo(event.previousContainer.data[event.previousIndex]);
    }
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  public updateTodo(todo: TodoBase) {
    todo.complete = !todo.complete;
    this.listMockService.updateTodo(todo);
  }

  public addTodo(event: TodoBase) {
    this.listMockService.addTodos(event)
      .subscribe((todo) => {
        this.todos.push(todo);
      });
  }
}
