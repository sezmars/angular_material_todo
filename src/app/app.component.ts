import {Component} from '@angular/core';
import {TodoMockService} from './components/todo/service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public todoslist = [];
  public todayList = [];

  constructor(private listMockService: TodoMockService) {
    this.listMockService.getTodos()
      .subscribe((todo) => {
        this.todoslist = todo;
      });
    this.listMockService.getTodayTodos()
      .subscribe((todo) => {
        this.todayList = todo;
      });
  }
}
